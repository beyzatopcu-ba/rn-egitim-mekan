import React from 'react';
import HeaderLeft from '../../Components/HeaderLeft';

export default (params, title) => {
    // React Navigation, parametre olarak 'navigation' nesnesini veriyor
    let navigation = params.navigation;
    return {
        title,
        // HeaderLeft'e 'navigation' props'unu ekleyen ufak component yazdık
        // HigherOrderComponent oldu bu
        headerLeft: () => <HeaderLeft navigation={navigation} />,
    }
}