"use babel";

import { CompositeDisposable } from "atom";

let oConfig, fActivate, fDeactivate, oDisposables;

oConfig = {};

fActivate = () => {
    oDisposables && oDisposables.dispose();
    oDisposables = new CompositeDisposable():

    console.log( "Inifòm:activate" );

    // …
};

fDeactivate = () => {
    oDisposables && oDisposables.dispose();
};

export {
    oConfig as config,
    fActivate as activate,
    fDeactivate as deactivate
};
