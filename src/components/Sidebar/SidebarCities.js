import React from 'react'
import Icon_StarSolid from '../../img/icon_star_solid_1x.png';
import Icon_StarRegular from '../../img/icon_star_regular_1x.png';

const SidebarCities = ({cities}) => {
    const SidebarItem = {
        'display': 'flex',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'background': 'rgba(255,255,255,0.1',
        'margin': '1rem 0',
        'verticaAlign': 'middle',
        'padding': '1rem 1.8rem',
        'minWidth': '200px'
    }

    const SidebarItemContent = {
        'display': 'inline-block',
        'verticalAlign': 'middle'
    }

    let favoriteBtnStyle = {
        'marginLeft': '1rem'
    }

    const CityList = cities.map((city) => {
        let favoriteBtn;
        if(city.favorite === true) {
            favoriteBtn = Icon_StarSolid
        } else {
            favoriteBtn = Icon_StarRegular
        }

        return(
            <div key={city.id} style={SidebarItem}>
                <h3 style={SidebarItemContent}>{city.name}</h3>
                <img style={SidebarItemContent} style={favoriteBtnStyle} src={favoriteBtn} alt="img" />
            </div>
        )
    })

    return (
        <div>
            {CityList}
        </div>
    )
}

export default SidebarCities