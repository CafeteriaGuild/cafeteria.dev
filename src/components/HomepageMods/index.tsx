import React, {useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from "@docusaurus/Translate";

const metaModList: string[] = require('@site/static/mods/_modlist.json').mods;

type ModItem = {
    title: string;
    description: string;
    icon: string;
    modrinth_slug: string;
    cf_slug: string;
    github: string
    id: string,
};

function ModIconButton(
    { title, icon, isFocused, isForceFocused, onSelect, onFocusIn, onFocusOut }: ModItem & {
        isFocused: boolean,
        isForceFocused: boolean,
        onSelect: () => void,
        onFocusIn: () => void,
        onFocusOut: () => void,
    }
) {
    const iconClasses = clsx({
        [styles.featureSvg]: true,
        [styles.selected]: isFocused,
        [styles.forceSelected]: isForceFocused,
    })

    return (
        <div className={clsx(styles.card)} onMouseEnter={onFocusIn} onMouseLeave={onFocusOut} onClick={onSelect}>
            <img alt={`${title} icon`} className={iconClasses} src={icon}/>
        </div>
    );
}

function ModInfoSection({ title, icon, description, cf_slug, modrinth_slug, github }: ModItem) {
    return (
        <article className={styles.highlight}>
            <div style={{marginTop: "3%"}}>
                <img alt={`${title} icon`} src={icon} className={styles.modicon}/>
                <h2 className={styles.modtitle}>{title}</h2>
                <p className={styles.moddesc}>{description}</p>
            </div>
            <div className={styles.buttons}>
                <Link className={styles.highlightbtn} to={'https://curseforge.com/minecraft/mc-mods/' + cf_slug}><img alt="CurseForge" src={"https://cdn.simpleicons.org/curseforge/black/white"}></img></Link>
                <Link className={styles.highlightbtn} to={'https://modrinth.com/mod/' + modrinth_slug}><img alt="Modrinth" src={"https://cdn.simpleicons.org/modrinth/black/white"}></img></Link>
                <Link className={styles.highlightbtn} to={'https://github.com/' + github}><img alt="GitHub" src={"https://cdn.simpleicons.org/github/black/white"}></img></Link>
            </div>
        </article>
    )
}

export default function HomepageMods(): JSX.Element {
    const [modList, setModList] = useState<ModItem[]>([])
    const [loading, setLoading] = useState(false)

    const [selected, setSelected] = useState<string | null>(null)
    const [temporaryForcedFocus, setTemporaryForcedFocus] = useState<string | null>(null)
    const [temporaryRandomFocus, setTemporaryRandomFocus] = useState<string | null>(null)

    const currentFocusedModId = temporaryForcedFocus ?? selected ?? temporaryRandomFocus
    const currentFocusedModMeta = useMemo(() => {
        return currentFocusedModId
            ? modList.find((mod) => mod.id === currentFocusedModId)
            : null
    }, [currentFocusedModId, modList])

    useEffect(() => {
        setLoading(true)

        Promise.all(
            metaModList.map(async (modSlug): Promise<ModItem> => {
                const { id, title, description, links: { curseforge, modrinth, github }, icon: metaIcon } = require(`@site/static/mods/${modSlug}.json`);
                const icon = metaIcon
                    ? require(`@site/static/img/${metaIcon}.png`).default
                    : await fetch(`https://api.modrinth.com/v2/project/${modrinth}`).then(r => r.json()).then((res) => res.icon_url);

                return {
                    id,
                    icon,
                    title,
                    github,
                    description,
                    cf_slug: curseforge,
                    modrinth_slug: modrinth,
                }
            })
        ).then((mods) => {
            setModList(mods)
            setLoading(false)
        })
    }, []);

    useEffect(() => {
        if (modList.length === 0) return

        const runnable = () => setTemporaryRandomFocus(modList[Math.floor(Math.random() * modList.length)].id)
        runnable()
        const interval = setInterval(runnable, 10000)
        return () => clearInterval(interval)
    }, [modList]);

    return (
        <section  className={styles.modlist}>
            <a  id="modlist" className={styles.modlist_anchor}></a>
            <div className="container">
                <h1 style={{textAlign: "center"}}>
                    <Translate>Check out our collection of</Translate>
                    <span style={{ color: '#FF9900' }}>
                            {' '}
                        {
                            loading
                                ? <Translate>a large list of</Translate>
                                : <>{modList.length}+</>
                        }
                        {' '}
                        </span>
                    <Translate>mods!</Translate>
                </h1>
                <div className={styles.spotlight}>
                    <div className={clsx("row")} style={{justifyContent: "center", width:"100%"}} >
                        {
                            modList.map((props) =>
                                <ModIconButton
                                    {...props}
                                    key={props.id}
                                    onFocusIn={() => setTemporaryForcedFocus(props.id)}
                                    onFocusOut={() => setTemporaryForcedFocus(null)}
                                    onSelect={() => setSelected(selected === props.id ? null : props.id)}
                                    isForceFocused={selected === props.id}
                                    isFocused={currentFocusedModId === props.id}
                                />
                            )
                        }
                    </div>
                    { currentFocusedModMeta && <ModInfoSection {...currentFocusedModMeta}/> }
                </div>
            </div>
        </section>
    );
}
