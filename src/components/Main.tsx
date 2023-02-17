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

  const reposUrl = 'https://api.github.com/repos/vitor115/todolist';
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
      <header>
        <div className="flex items-center w-full rounded-2xl bg-cards shadow-black shadow-sm p-[30px]">
          Portifólio de projetos
        </div>
      </header>
      <div className="flex items-center w-full rounded-2xl bg-cards shadow-black shadow-sm min-h-[186px] gap-5 p-[30px]">
        <ProfilePic />
        <article className="w-full overflow-auto">
          <h2 className=" font-bold mb-2"> Sobre Mim</h2>
          <p>
            Trabalho com Projetos como Desenvolvedor Front-end tendo experiência
            em HTML, CSS, Javascript, ReactJS e Typescript. Sou um Dev
            apaixonado por desenvolver novas soluções que melhoram a vida do
            cliente, com experiência em Product Management e Quality Assurance,
            sempre desenvolvo soluções que agregam na experiência do usuário e
            na interface.
          </p>
          <ul className="flex gap-[10px] mt-2">
            <li className="text-sm">#ReactJS</li>
            <li className="text-sm">#HTML</li>
            <li className="text-sm">#CSS</li>
            <li className="text-sm">#Front-end</li>
          </ul>
        </article>
      </div>
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
            <a href="https://github.com/vitor115/busca-curso">
              <h2> {reposName}</h2>
            </a>
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
            <a href="https://vitor115.github.io/todolist/">
              <h2>{reposName2}</h2>
            </a>
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
    </main>
  );
}
