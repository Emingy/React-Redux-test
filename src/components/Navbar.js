import React from 'react';

export default ({pages})=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light h-100 align-top border" style={{width: 10+'vw'}}>
            <div className="container-fluid flex-column mt-0 mb-auto">
                <a className="navbar-brand" href='/'>Разделы</a>
                <ul className="navbar-nav flex-column mt-5 ml-auto mr-auto">
                    {pages.map((page,i) => {
                        return (
                            <li key={i} className="nav-item">
                                <a className="nav-link text-center" href={`/${page}`}>{page}</a>
                                <hr/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}