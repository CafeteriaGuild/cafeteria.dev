import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';
import Translate from "@docusaurus/Translate";

type FeatureItem = {
  title: JSX.Element;
  Svg: string;
  description: JSX.Element;
  id: string,
};

const titles = [
    {title: <Translate>Learn about our mods</Translate>},
    {title: <Translate>Meet our members</Translate>},
];

const FeatureList: FeatureItem[] = [
    {
        title: titles[0].title,
        Svg: 'apps',
        description: (
            <>
                <Translate>
                    At Cafeteria we have loads of mods, ranging from simple utility mods to magic, tech and other mods
                    loaded with features for you!
                </Translate>
            </>
        ),
        id: '#modlist'
    },
    {
        title: titles[1].title,
        Svg: 'groups',
        description: (
            <>
                <Translate>
                    We have lots of members, developers and artists, developing mods as their favorite hobby!
                </Translate>
            </>
        ),
        id: '#members'
    }
];

function Feature({title, Svg, description, id}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <span className={clsx("material-icons", styles.featureSvg)}>{Svg}</span>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={id}>
                    <Translate>
                        Go to page
                    </Translate>
                </Link>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row" style={{justifyContent: "space-evenly"}}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
