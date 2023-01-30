import { ProfilePic } from './ProfilePic';
import fork from '../assets/git-branch.svg';
import folder from '../assets/folder.svg';
import star from '../assets/star.svg';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function Main() {
  const [stars, setStars] = useState(0);
  const [reposName, setReposName] = useState('Repos Name');
  const [description, setDescription] = useState('');
  const [forks, setForks] = useState(0);
  const [language, setLanguage] = useState('');

  const [stars2, setStars2] = useState(0);
  const [reposName2, setReposName2] = useState('Repos Name');
  const [description2, setDescription2] = useState('');
  const [forks2, setForks2] = useState(0);
  const [language2, setLanguage2] = useState('');

  const reposUrl = 'https://api.github.com/repos/vitor115/portifolio';
  const reposUrl2 = 'https://api.github.com/repos/vitor115/busca-curso';
  async function getReposInfo() {
    try {
      const portifolioResponse = await axios.get(reposUrl);
      setStars(portifolioResponse.data.stargazers_count);
      setReposName(portifolioResponse.data.name);
      setDescription(portifolioResponse.data.description);
      setForks(portifolioResponse.data.forks_count);
      const portifolioLanguageResponse = await axios.get(
        reposUrl + '/languages'
      );
      setLanguage(Object.keys(portifolioLanguageResponse.data)[0]);
      const res = await axios.get(reposUrl2);
      setStars2(res.data.stargazers_count);
      setReposName2(res.data.name);
      setDescription2(res.data.description);
      setForks2(res.data.forks_count);
      const buscaLanguageResponse = await axios.get(reposUrl2 + '/languages');
      setLanguage2(Object.keys(buscaLanguageResponse.data)[0]);
    } catch (e) {
      console.log('ERROR: ' + e);
      return e;
    }
  }

  useEffect(() => {
    getReposInfo();
  }, []);

  return (
    <main className="flex flex-col gap-[30px]">
      <header className=" h-ful w-full rounded-2xl shadow-black shadow-sm bg-cards p-[30px] flex items-center">
        <h2 className="">My Projects</h2>
        <a href="#" className="ml-auto text-sm">
          Veja todos
        </a>
      </header>
      <section className="flex gap-[30px]">
        <div className="flex flex-col justify-center w-full h-ful rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px] p-[30px] flex-wrap">
          <header className="flex gap-4 mb-5">
            <img src={folder} alt="" />
            <h2> {reposName}</h2>
          </header>
          <p className="mb-12">{description}</p>
          <div className="flex">
            <img src={star} className="mr-1" alt="" />
            <p className="mr-3" id="firstRepos">
              {stars}
            </p>
            <img src={fork} className="mr-1" alt="" />
            <p>{forks}</p>
            <div className="h-2 w-2 bg-yellow-300 self-center ml-auto mr-2 rounded-full border-2 "></div>
            <p>{language}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full h-ful rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px] p-[30px]">
          <header className="flex gap-4 mb-5">
            <img src={folder} alt="" />
            <h2>{reposName2}</h2>
          </header>
          <p className="mb-12">{description2}</p>
          <div className="flex">
            <img src={star} className="mr-1" alt="" />
            <p className="mr-3">{stars2}</p>
            <img src={fork} className="mr-1" alt="" />
            <p>{forks2}</p>
            <div className="h-2 w-2 bg-yellow-300 self-center ml-auto mr-2 rounded-full border-2 "></div>
            <p>{language2}</p>
          </div>
        </div>
      </section>
      <header>
        <div className="flex items-center w-full rounded-2xl bg-cards shadow-black shadow-sm p-[30px]">
          Recent Posts
        </div>
      </header>
      <div className="flex items-center w-full rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px] gap-5 p-[30px]">
        <ProfilePic />
        <article className="w-full overflow-auto">
          <h2 className=" font-bold"> Voltando a aprender</h2>
          <p className="mb-7 text-sm">1 sem atrás</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            voluptate consequatur obcaecati dolores, eligendi omnis harum earum
            explicabo quo aliquid unde! Quos maiores consequatur fuga distinctio
            eum, ipsa vel facilis.
          </p>
          <ul className="flex gap-[10px]">
            <li className="text-sm">#Vida</li>
            <li className="text-sm">#qualidade</li>
            <li className="text-sm">#html</li>
            <li className="text-sm">#react</li>
          </ul>
          {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7021142600409563136"  title="Publicação incorporada" className="w-full h-[400px] rounded" frameborder="0"></iframe>
           */}
        </article>
      </div>
    </main>
  );
}
