import React from 'react'

// Icon importées
import {AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return(
    <div className='searchDiv grid gap-10  bg-greyIsh rounded-[10px] p-[3rem]'>
        <form action="">
            <div className='firstDiv flex justify-between items -center rounded-[8px] gap-[10px]  bg-white p-5 shadow-lg shadow-greyIsh-700'>
                <div className='flex gap-2 items-center'>
                    <AiOutlineSearch className='text-[25px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Cherchez votre formation....' />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineSearch className='text-[25px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Cherchez votre formation....' />
                    <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineSearch className='text-[25px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Cherchez votre formation....' />
                    <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>
                <button className=' bg-bluecolor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300 '>Recherche</button>
            </div>
        </form>
        <div className='secDiv flex items-center gap-5 justify-center '>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="relevance" className=' text-[#808080] font-semibold'>Trier par:</label>

                <select name="" id="relevance" className='bg-white rounded-[3px] px-4 px-1'>
                    <option value="">Durée</option>
                    <option value="">Prix</option>

                </select>

            </div>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="relevance" className=' text-[#808080] font-semibold'>Trier par:</label>

                <select name="" id="relevance" className='bg-white rounded-[3px] px-4 px-1'>
                    <option value="">Durée</option>
                    <option value="">Prix</option>

                </select>

            </div>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="relevance" className=' text-[#808080] font-semibold'>Trier par:</label>

                <select name="" id="relevance" className='bg-white rounded-[3px] px-4 px-1'>
                    <option value="">Durée</option>
                    <option value="">Prix</option>

                </select>

            </div>

        </div>

    </div>
  )
}

export default Search
