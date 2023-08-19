import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';
import Translate from "@docusaurus/Translate";

let _modList = require('@site/static/mods/_modlist.json');

type ModItem = {
    title: string;
    description: string;
    icon: string;
    modrinth_slug: string;
    cf_slug: string;
    github: string
    id: string,
};


export let ModList: ModItem[] = []

_modList.mods.forEach((id) => {
    let modJson = require('@site/static/mods/' + id + '.json');
    let mod: ModItem = {
        title: modJson.title,
        description: modJson.description,
        icon: modJson.icon,
        modrinth_slug: modJson.links.modrinth,
        cf_slug: modJson.links.curseforge,
        github: modJson.links.github,
        id: modJson.id
    }

    if (mod.icon === undefined) {
        fetch("https://api.modrinth.com/v2/project/" + mod.modrinth_slug).then((r) => r.json()).then((json) => {
            mod.icon = json.icon_url;
            if (typeof window !== 'undefined') {
                (document.getElementById(mod.id + "_icon") as HTMLImageElement).src = mod.icon;
                if (mod.id == selected.id)
                    (document.getElementById("modicon") as HTMLImageElement).src = mod.icon;
            }
        });
    } else {
        mod.icon = require('@site/static/img/'+ mod.icon + '.png').default
    }
    ModList.push(mod)
})

let selected: ModItem = ModList[0];

function ModCard(idx, {title, icon, id}: ModItem) {
    return (
        <div id={id} key={idx} className={clsx(styles.card)}
             onMouseDown={(e) => SelectCard(id, false)}
             onMouseLeave={(e) => SelectCard(selected.id, true)}
        >
            <img alt={title} id={id + "_icon"} className={styles.featureSvg} src={icon}/>
        </div>);
}

export default function HomepageMods(): JSX.Element {
    return (
        <section  className={styles.modlist}>
            <a  id="modlist" className={styles.modlist_anchor}></a>
            <div className="container">
                <h1 style={{textAlign: "center"}}>
                    <Translate>
                        Check out our collection of
                    </Translate>
                    <a style={{color: "#FF9900"}}> {ModList.length}+ </a>
                    <Translate>
                        mods!
                    </Translate>
                </h1>
                <div className={styles.spotlight}>
                    <div className={clsx("row")} style={{justifyContent: "center", width:"100%"}} >
                        {
                            ModList.map((props, idx) => ModCard(idx, props))
                        }
                    </div>
                    <div className={styles.highlight}>
                        <div style={{marginTop: "3%"}}>
                            <img alt="mod icon" id='modicon' src={selected.icon} className={styles.modicon}/>
                            <h2 id='modtitle' className={styles.modtitle}>{selected.title}</h2>
                            <p id='moddesc' className={styles.moddesc}>{selected.description}</p>
                        </div>
                        <div className={styles.buttons}>
                            <Link id='cf-link' className={styles.highlightbtn} to={'https://curseforge.com/minecraft/mc-mods/' + selected.cf_slug}><img alt="CurseForge" src={"https://cdn.simpleicons.org/curseforge/black/white"}></img></Link>
                            <Link id='modrinth-link' className={styles.highlightbtn} to={'https://modrinth.com/mod/' + selected.modrinth_slug}><img alt="Modrinth" src={"https://cdn.simpleicons.org/modrinth/black/white"}></img></Link>
                            <Link id='gh-link' className={styles.highlightbtn} to={'https://github.com/' + selected.github}><img alt="GitHub" src={"https://cdn.simpleicons.org/github/black/white"}></img></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

let timeoutId;
function SelectCard(id, loop) {
    if (typeof window !== 'undefined') {
        ModList.forEach((mod) => {
            if (mod.id == id) {
                selected = mod
                document.getElementById(mod.id).classList.add(styles.selected)
            } else {
                document.getElementById(mod.id).classList.remove(styles.selected)
            }
        })

        document.getElementById('modtitle').innerHTML = selected.title;
        document.getElementById('moddesc').innerHTML = selected.description;
        (document.getElementById('modicon') as HTMLImageElement).src = selected.icon;

        let cfLink = (document.getElementById('cf-link') as HTMLLinkElement);
        cfLink.href = 'https://curseforge.com/minecraft/mc-mods/' + selected.cf_slug;
        if (selected.cf_slug !== undefined) cfLink.classList.remove(styles.hidden);
        else cfLink.classList.add(styles.hidden);

        let modrinthLink = document.getElementById('modrinth-link') as HTMLLinkElement;
        if (selected.modrinth_slug !== undefined) modrinthLink.classList.remove(styles.hidden);
        else modrinthLink.classList.add(styles.hidden);
        modrinthLink.href = 'https://modrinth.com/mod/' + selected.modrinth_slug;
        (document.getElementById('gh-link') as HTMLLinkElement).href = 'https://github.com/' + selected.github;
    }

    clearTimeout(timeoutId);
    if (loop)
        timeoutId = setTimeout(() => SelectCard(ModList[Math.floor(Math.random() * ModList.length)].id, true), 10000);
}