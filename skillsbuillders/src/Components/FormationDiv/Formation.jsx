import React from 'react'

// Icons Importées:
import {BiTimeFive} from 'react-icons/bi'
// Pour toutes les formations:
const Data = [
    {
        id:1,
        Titre:'Web',
        Temps_res: 'Now',
        Durée:'Durée:12 mois',
        Desc: 'dfcgvbhjgvfcgvbhjnbgfvbhjnbgvfhbjngvf',
        Prix:'3000',
    },
    {
        id:2,
        Titre:'fdgcbhjk trdf hjghjgkjhkjcvhgb',
        Temps_res: 'Now,',
        Durée:'Durée:12 ',
        Desc: 'dsdftgyhujiokjhgyftdrs',
        Prix:'3000',
    },
]

const Formation = () => {
  return(
    <div>
        <div className='formationContainer flex gap-10 justify-center flex wrap items-center py-10'>
            {
                Data.map(({id,Titre,Temps_res,Durée,Desc,Prix}) =>{
                    return (
                        <div key={id} className='group group/items singleFormation border-[1px] w-[250px] p-[20px] bg-white rounded [10px] hover:bg-bluecolor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                             <span className='flex justify-between items-center gap-4'>
                                 <h1 className='text-[16px] font-semibold text-textcolor group-hover:text-white'>{Titre}</h1>
                                <span className='flex items-center text [#ccc] gap-1'>
                                 <BiTimeFive/> {Temps_res}
                                </span>
                             </span>
                             <h6>{Durée}</h6>
                             <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{Desc}
                             </p>

                             <div  className='formation flex items-center gap-2'>
                                 <span className='text-[14px] py-[1rem] block group-hover:text-white'>{Prix}</span>
                                     <button className='border-[2px] rounded-[10px] block p-[7px] w-[80px] text-[14px] font-semi-bold text-textcolor hover:bg-white group-hover/item:text-textColor '>S'inscrire
                                     </button>
                             </div>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Formation
