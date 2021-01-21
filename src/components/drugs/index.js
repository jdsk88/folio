import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../small_components/loader";
import { API_URL } from "../../config/constants";
import axios from "axios";
import { Button } from '@material-ui/core';
import {DrugsList} from './drugsList'

export const Drugs = () => {
  const [drugs, setDrugs] = useState([]);
  const [reload, setReload] = useState([]);
  const [import_data, setImport_data] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = new URLSearchParams(useLocation().search);
  useEffect(() => {
    const params = new URLSearchParams({
      limit: queryParams.get("limit") || 10,
      page: queryParams.get("page") || 1,
      nazwa: queryParams.get("nazwa") || '',
    });
    setIsLoading(true);

    fetch(`${API_URL}drugs?${params.toString()}`)
      .then((resp) => resp.json())
      .then((data) => setDrugs(data))
      .finally(() => setIsLoading(false));
  }, [reload]);
  // if (isLoading) {
  //   return <Loader title="Drugs loading" subtitle="Please wait" />;
  // }
  const RELOAD = () => {
    setReload((state) => !state);
    console.log("reloading data")
  }
  const DEL = async () => {
    await axios.delete(`${API_URL}drugs`)
    setReload((state) => !state);
    console.log("DEL data")
  }

  //import data from file and post to server database
  let importData = [];
  const ImportedData = () => {
    const data = importData.result;
    const parsed_data = JSON.parse(data);
    setImport_data(parsed_data);
  };

  const ImportedDataSave = () => {
    console.log(`${import_data.length} objects saved!`)
    for (var i in import_data) {
      axios.post(`${API_URL}drugs`, {
        sysDateCreated: import_data[i].sysDateCreated,
        sysDateUpdated: import_data[i].sysDateUpdated,
        sysUserId: import_data[i].sysUserId,
        nazwa: import_data[i].nazwa,
        rodzajPrep: import_data[i].rodzajPrep,
        nazPowStos: import_data[i].nazPowStos,
        postac: import_data[i].postac,
        dawka: import_data[i].dawka,
        podmOdpow: import_data[i].podmOdpow,
        typProc: import_data[i].typProc,
        nrPozw: import_data[i].nrPozw,
        waznPozw: import_data[i].waznPozw,
        kodAtc: import_data[i].kodAtc,
        substCzynna: import_data[i].substCzynna,
        ean: import_data[i].ean,
        wielkoscOpak: import_data[i].wielkoscOpak,
        jednWielkOpak: import_data[i].jednWielkOpak,
        katDostOpak: import_data[i].katDostOpak,
        skasowane: import_data[i].skasowane,
        nrEu: import_data[i].nrEu,
        dystrRown: import_data[i].dystrRown,
        nazPostDawka: import_data[i].nazPostDawka,
        zawOpak: import_data[i].zawOpak,
        terminWejscia: import_data[i].terminWejscia,
        okresObowiazDec: import_data[i].okresObowiazDec,
        grupaLimit: import_data[i].grupaLimit,
        urzCenaZb: import_data[i].urzCenaZb,
        cenaHurtBrut: import_data[i].cenaHurtBrut,
        cenaDetal: import_data[i].cenaDetal,
        wysokLimitu: import_data[i].wysokLimitu,
        zakrWskazRef: import_data[i].zakrWskazRef,
        zakrWskazPoza: import_data[i].zakrWskazPoza,
        poziomOdpl: import_data[i].poziomOdpl,
        wysokDopl: import_data[i].wysokDopl,
        katalog: import_data[i].katalog,
        refun: import_data[i].refund
      })
    }
  }

  const DeleteProductsDataBase = () => {
    axios.delete(`${API_URL}products`)
  }

  const FReader = (file) => {
    importData = new FileReader();
    importData.onloadend = ImportedData;
    importData.readAsText(file);
  };

  return (
    <div>
      <Button>
        <input
          type='file'
          id='file'
          className='input-file'
          accept='.json'
          onChange={(e) => FReader(e.target.files[0])} />
                    IMPORT DRUGS</Button>
      <Button onClick={ImportedDataSave}>SAVE DRUGS</Button>
      <Button onClick={RELOAD}>RELOAD DRUGS</Button>
      <DrugsList key={drugs.length} drugs={drugs} />
    </div>
  );

}