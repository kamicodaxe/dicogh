// import logo from './logo.svg';
import classNames from 'classnames';
import { useState, useMemo, useEffect } from 'react';
import './App.css';

function App() {

  const [activeIdx, setActiveIdx] = useState(0)

  const [searchString, setSearchString] = useState('')
  const [list, setList] = useState([])
  const [selected, setSelected] = useState(null)

  const filteredList = useMemo(() => {
    return list.filter(item => {
      if (item?.terme_fr.toLowerCase().includes(searchString.toLowerCase())) {
        return true
      }
      return false
    })
  }, [searchString])

  useEffect(() => {
    const words = require('./words.json')
    setList(words)
    console.log(words)
  }, [])

  return (
    <div>

      <div className='flex flex-row'>

        <div className="flex flex-col h-screen p-3 w-60 dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2>Dictionnaire</h2>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button type="submit" className="p-2 focus:outline-none focus:ring">
                  <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-400">
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input onChange={e => setSearchString(e.currentTarget.value)} type="search" name="Search" placeholder="Recherche..." className="w-full py-2 pl-10 text-sm dark:border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
            </div>
            <div className="flex flex-1 overflow-y-scroll">
              <ul className="pt-2 pb-4 space-y-1 text-sm">

                {
                  filteredList.map(item => (
                    <li key={item.terme_fr} className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                      <a onClick={e => {
                        e.preventDefault()
                        setSelected(item)
                      }} rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                        <span>{item.terme_fr}</span>
                      </a>
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>

        </div>

        <div className='w-full'>

          <div className="flex items-center space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-800 text-gray-100">
            <button onClick={() => setActiveIdx(0)} className={classNames("flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-700 text-gray-400", { "border-violet-400 text-gray-50": activeIdx === 0 })}>Français</button>
            <button onClick={() => setActiveIdx(1)} className={classNames("flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-700 text-gray-400", { "border-violet-400 text-gray-50": activeIdx === 1 })}>Anglais</button>
            <button onClick={() => setActiveIdx(2)} className={classNames("flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-700 text-gray-400", { "border-violet-400 text-gray-50": activeIdx === 2 })}>Ghɔmáláꞌ</button>
          </div>

          {
            selected && <>
              {
                activeIdx === 0 && (
                  <div className='p-4'>

                    <h3 className='text-md font-semibold'>Terme vedette</h3>
                    <p className='pb-2'>{selected?.terme_fr}</p>

                    <h3 className='text-md font-semibold'>Catégorie grammaticale</h3>
                    <p className='pb-2'>
                      {selected?.cat_fr}
                    </p>

                    <h3 className='text-md font-semibold'>Domaine</h3>
                    <p className='pb-2'>
                      {selected?.dom_fr}
                    </p>

                    <h3 className='text-md font-semibold'>Sous-domaine</h3>
                    <p className='pb-2'>
                      {selected?.sous_dom_fr}
                    </p>

                    <h3 className='text-md font-semibold'>Définition</h3>
                    <p className='pb-2'>
                      {selected?.def_fr}
                    </p>

                    <h3 className='text-md font-semibold'>Source de la définition</h3>
                    <p className='pb-2'>
                      {selected?.source_fr}
                    </p>

                    <h3 className='text-md font-semibold'>Phraséologie</h3>
                    <p className='pb-2'>
                      {selected?.phr_fr}
                    </p>

                    <h3 className='text-md font-semibold'>Auteur de la fiche et date de création de la fiche</h3>
                    <p className='pb-2'>
                      {selected?.autheur}
                    </p>

                  </div>
                )
              }

              {
                activeIdx === 1 && (
                  <div className='p-4'>

                    <h3 className='text-md font-semibold'>Terme vedette</h3>
                    <p className='pb-2'>{selected?.terme_en}</p>

                    <h3 className='text-md font-semibold'>Catégorie grammaticale</h3>
                    <p className='pb-2'>
                      {selected?.cat_en}
                    </p>

                    <h3 className='text-md font-semibold'>Domaine</h3>
                    <p className='pb-2'>
                      {selected?.dom_en}
                    </p>

                    <h3 className='text-md font-semibold'>Sous-domaine</h3>
                    <p className='pb-2'>
                      {selected?.sous_dom_en}
                    </p>

                    <h3 className='text-md font-semibold'>Définition</h3>
                    <p className='pb-2'>
                      {selected?.def_en}
                    </p>

                    <h3 className='text-md font-semibold'>Source de la définition</h3>
                    <p className='pb-2'>
                      {selected?.source_en}
                    </p>

                    <h3 className='text-md font-semibold'>Phraséologie</h3>
                    <p className='pb-2'>
                      {selected?.phr_en}
                    </p>

                    <h3 className='text-md font-semibold'>Auteur de la fiche et date de création de la fiche</h3>
                    <p className='pb-2'>
                      {selected?.autheur}
                    </p>

                  </div>
                )
              }

              {
                activeIdx === 2 && (
                  <div className='p-4'>

                    <h3 className='text-md font-semibold'>Terme vedette</h3>
                    <p className='pb-2'>{selected?.terme_gh}</p>

                    <h3 className='text-md font-semibold'>Catégorie grammaticale</h3>
                    <p className='pb-2'>
                      {selected?.cat_gh}
                    </p>

                    <h3 className='text-md font-semibold'>Domaine</h3>
                    <p className='pb-2'>
                      {selected?.dom_gh}
                    </p>

                    <h3 className='text-md font-semibold'>Sous-domaine</h3>
                    <p className='pb-2'>
                      {selected?.sous_dom_gh}
                    </p>

                    <h3 className='text-md font-semibold'>Définition</h3>
                    <p className='pb-2'>
                      {selected?.def_gh}
                    </p>

                    <h3 className='text-md font-semibold'>Source de la définition</h3>
                    <p className='pb-2'>
                      {selected?.source_gh}
                    </p>

                    <h3 className='text-md font-semibold'>Phraséologie</h3>
                    <p className='pb-2'>
                      {selected?.phr_gh}
                    </p>

                    <h3 className='text-md font-semibold'>Auteur de la fiche et date de création de la fiche</h3>
                    <p className='pb-2'>
                      {selected?.autheur}
                    </p>

                  </div>
                )
              }
            </>
          }


        </div>

      </div >



    </div >
  );
}

export default App;
