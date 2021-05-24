import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
import Styles from './FrontBrand.module.scss';
import CurseForge from '../../svg/curseforge.svg';

export default function FrontBrand({ children, ...props }) {

  return (
    <article {...props}>
      <section className="sm:dark:text-gray-400 text-center">
        <h1 className="md:text-5xl text-3xl pt-5">
          Cafeteria Development
        </h1>

        { children }

        <code className={`block text-sm ${Styles.code}`}>
          fun randomInt(): Int = 7 <br className="inlne sm:none"/> /* This was decided in a poll by the dev team */
        </code>
      </section>
      <footer className="pt-4">
        <nav className="text-center">
          <ul>
            <li className="inline mr-2">
              <Link href="https://www.curseforge.com/members/cafeteriaguild">
                <a target="_blank">
                  <CurseForge className="inline h-5 filter dark:invert dark:opacity-80"/>
                </a>
              </Link>
            </li>
            <li className="inline mr-3">
              <Link href="https://github.com/CafeteriaGuild">
                <a target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="inline h-6 text-black dark:text-gray-300"/>
                </a>
              </Link>
            </li>
            <li className="inline">
              <Link href="https://discord.gg/G4PjhEf">
                <a target="_blank">
                  <FontAwesomeIcon icon={faDiscord} className="inline h-6 text-black dark:text-gray-300"/>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </article>
  )
}
