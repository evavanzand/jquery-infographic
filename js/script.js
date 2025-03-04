/**
 * @author Eva van Zand <e.van.zand@st.hanze.nl>
 * klas: CMV1K
 */


/**Data uit de API.*/
var allDataAirports;

/**Deze variabele slaat de data van alle aiports op */
var allDataFull;

/**Deze variabele slaat de gefilterde data op */
var filteredData;

/**Deze variabele slaat het geselecteerde vliegveld op */
var currentAirport;

/**Deze variabele slaat het geselecteerde jaartal op */
var huidigeJaartal;



$(document).ready(function () {

    getData();

    /**Dit zorgt ervoor dat drie van de vier charts niet getoont worden bij het laden van de pagina*/
    $('#chartWereld').hide();
    $('#chartPassagiers').hide();
    $('#chartGoederen').hide();

});


//De credits voor onderstaande functies (getData/geladen/geladen2) gaan naar Daniël Sturing.
function getData() {
    /**Hiermee wordt de data vanuit de API van CBS.nl verkregen.*/
    $.ajax({
        url: "https://opendata.cbs.nl/ODataApi/odata/37478hvv/Luchthavens",
        success: geladen,
        /**
         * @param  {} request
         * @param  {} status
         * @param  {} msg
         */
        error: function (request, status, msg) {
            console.log(request, msg, status);
            window.alert("Het laden van de data is helaas niet gelukt. Probeer het later nog eens.");
        }
    });

    /**Hiermee wordt de data vanuit de API van CBS.nl verkregen.*/
    $.ajax({
        url: "https://opendata.cbs.nl/ODataApi/odata/37478hvv/TypedDataSet",
        success: geladen2,
        /**
         * @param  {} request
         * @param  {} status
         * @param  {} msg
         */
        error: function (request, status, msg) {
            console.log(request, msg, status);
            window.alert("Het laden van de data is helaas niet gelukt. Probeer het later nog eens.");
        }
    })
}
/**
 * @param  {} data
 */
function geladen(data) {
    /**Alle waarden uit de API halen */
    allDataAirports = data.value;
    /**
     * @param  {} allDataAirports
     * @param  {} function(data
     * @param  {} value
     * 
     * 
     * Deze functie haalt de titels van de Vliegvelden binnen zoals ze getoont worden in de API. Dit wordt gedaan door de codes die erbij horen.
     */
    $.each(allDataAirports, function (data, value) {
        if (value.Key == "A043593")
        /**Deze haalt de titels van de Airports uit de API */
        {
            $("#vliegveldEelde").text(value.Title);
        }
        if (value.Key == "A043591")
        /**Deze haalt de titels van de Airports uit de API */
        {
            $("#vliegveldEindhoven").text(value.Title);
        }
        if (value.Key == "A043590")
        /**Deze haalt de titels van de Airports uit de API */
        {
            $("#vliegveldAmsterdam").text(value.Title);
        }
        if (value.Key == "A043595")
        /**Deze haalt de titels van de Airports uit de API */
        {
            $("#vliegveldMaastricht").text(value.Title);
        }
        if (value.Key == "A043596")
        /**Deze haalt de titels van de Airports uit de API */
        {
            $("#vliegveldRotterdam").text(value.Title);
        }
    })
}

/**
 * @param  {} data
 */
function geladen2(data) {
    allDataFull = data.value;
    /**
     * @param  {} document
     * @param  {} .click(function(e
     */
    $(document).click(function (e) {
        //Dit zorgt ervoor dat wanneer er op het iconEelde geklikt wordt, de currentAirport naar Eelde wordt gezet. Ook worden de plekken waar de data in komt leeggehaald
        if (e.target.id == "iconEelde") {
            currentAirport = "A043593";
            $('#huidigeVliegveld').text("Groningen Airport Eelde");
            $('#geselecteerdJaar').text("2018");
            $('#vergelijkingVliegveld').text("Groningen Airport Eelde");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }
        if (e.target.id == "iconRotterdam")
        //Dit zorgt ervoor dat wanneer er op het iconRotterdam geklikt wordt, de currentAirport naar Rotterdam wordt gezet. Ook worden de plekken waar de data in komt leeggehaald
        {
            currentAirport = "A043596";
            $('#huidigeVliegveld').text("Rotterdam The Hague Airport");
            $('#geselecteerdJaar').text("2018");
            $('#vergelijkingVliegveld').text("Rotterdam The Hague Airport");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }
        if (e.target.id == "iconEindhoven")
        //Dit zorgt ervoor dat wanneer er op het iconEindhoven geklikt wordt, de currentAirport naar Eindhoven wordt gezet. Ook worden de plekken waar de data in komt leeggehaald
        {
            currentAirport = "A043591";
            $('#huidigeVliegveld').text("Eindhoven Airport");
            $('#geselecteerdJaar').text("2018");
            $('#vergelijkingVliegveld').text("Eindhoven Airport");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }
        if (e.target.id == "iconMaastricht")
        //Dit zorgt ervoor dat wanneer er op het iconMaastricht geklikt wordt, de currentAirport naar Maastricht wordt gezet. Ook worden de plekken waar de data in komt leeggehaald
        {
            currentAirport = "A043595";
            $('#huidigeVliegveld').text("Maastricht Aachen Airport");
            $('#geselecteerdJaar').text("2018");
            $('#vergelijkingVliegveld').text("Maastricht Aachen Airport");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }
        if (e.target.id == "iconAmsterdam")
        //Dit zorgt ervoor dat wanneer er op het iconAmsterdam geklikt wordt, de currentAirport naar Amsterdam wordt gezet. Ook worden de plekken waar de data in komt leeggehaald
        {
            currentAirport = "A043590";
            $('#huidigeVliegveld').text("Amsterdam Airport Schiphol");
            $('#geselecteerdJaar').text("2018");
            $('#vergelijkingVliegveld').text("Amsterdam Airport Schiphol");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }

        // bovenstaande functie geeft aan welk vliegveld er momenteel geselecteerd is
        if (e.target.id == "jaar2018")
        //Dit zorgt ervoor dat het geselecteerde jaartal in de variabele huidigeJaartal wordt opgeslagen. Ook worden de plekken waar de data in komt leeggehaald
        {
            huidigeJaartal = "2018JJ00";
            $('#geselecteerdJaar').text("2018");
            $('#vergelijkingJAar').text("2018");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }
        if (e.target.id == "jaar2017")
        //Dit zorgt ervoor dat het geselecteerde jaartal in de variabele huidigeJaartal wordt opgeslagen. Ook worden de plekken waar de data in komt leeggehaald
        {
            huidigeJaartal = "2017JJ00";
            $('#geselecteerdJaar').text("2017");
            $('#vergelijkingJAar').text("2017");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }
        if (e.target.id == "jaar2016")
        //Dit zorgt ervoor dat het geselecteerde jaartal in de variabele huidigeJaartal wordt opgeslagen. Ook worden de plekken waar de data in komt leeggehaald
        {
            huidigeJaartal = "2016JJ00";
            $('#geselecteerdJaar').text("2016");
            $('#vergelijkingJAar').text("2016");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }
        if (e.target.id == "jaar2015")
        //Dit zorgt ervoor dat het geselecteerde jaartal in de variabele huidigeJaartal wordt opgeslagen. Ook worden de plekken waar de data in komt leeggehaald
        {

            huidigeJaartal = "2015JJ00";
            $('#geselecteerdJaar').text("2015");
            $('#vergelijkingJAar').text("2015");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }
        if (e.target.id == "jaar2014")
        //Dit zorgt ervoor dat het geselecteerde jaartal in de variabele huidigeJaartal wordt opgeslagen. Ook worden de plekken waar de data in komt leeggehaald
        {

            huidigeJaartal = "2014JJ00";
            $('#geselecteerdJaar').text("2014");
            $('#vergelijkingJAar').text("2014");
            $('#totaalVluchten, #totaalVertrokken, #totaalAangekomen, #totaalGeregeld, #totaalOngeregeld', ).text("");
            $('#totaalIntercontinentaal, #totaalAfrika, #totaalAmerika, #totaalAzie, #totaalEuropa', ).text("");
            $('#totaalPassagiers, #totaalVertrokkenPassagiers, #totaalAangekomenPassagiers, #totaalGeregeldePassagiers, #totaalOnGeregeldePassagiers', ).text("");
            $('#totaalGoederenVervoer, #totaalGelosteGoederen, #totaalGeladenGoederen, #totaalPostVervoer, #totaalGelostePost', ).text("");
        }

        if (e.target.id == "vliegtuig")
        /*Dit zorgt ervoor dat de chart de informatie kan binnenhalen die binnengehaald moeten worden. Ook zorgt dit ervoor dat de juiste chart getoont wordt en de andere gehide worden.
               Verder zorgt dit ervoor dat wanneer er op het icon gedrukt wordt er data binnengehaald wordt over de genoemde onderwerpen. De filterdata die genoemd wordt zorgt ervoor dat de juiste informatie uit de dataset gefilterd wordt*/
        {
            filterData(currentAirport, huidigeJaartal, "#totaalVluchten", "#totaalVertroken", "#totaalAangekomen", "#totaalGeregeld", "#totaalOngeregeld");
            myChart.data.datasets[0].data.splice(0);
            filterdateEelde(currentAirport, "2014JJ00");
            filterdateEelde(currentAirport, "2015JJ00");
            filterdateEelde(currentAirport, "2016JJ00");
            filterdateEelde(currentAirport, "2017JJ00");
            filterdateEelde(currentAirport, "2018JJ00");
            $('#vergelijking').text("Vergelijking Totaal Aangekomen Vluchten");
            $("#chartWereld").hide();
            $("#chartPassagiers").hide();
            $("#myChart").show();
            $("#chartGoederen").hide();

        }
        if (e.target.id == "wereld")
        /*Dit zorgt ervoor dat de chart de informatie kan binnenhalen die binnengehaald moeten worden. Ook zorgt dit ervoor dat de juiste chart getoont wordt en de andere gehide worden.
        Verder zorgt dit ervoor dat wanneer er op het icon gedrukt wordt er data binnengehaald wordt over de genoemde onderwerpen. De filterdata die genoemd wordt zorgt ervoor dat de juiste informatie uit de dataset gefilterd wordt*/
        {
            filterData2(currentAirport, huidigeJaartal, "#totaalIntercontinentaal", "#totaalAfrika", "#totaalAmerika", "#totaalAzie", "#totaalEuropa");
            $('#vergelijking').text("Vergelijking totaal Intercontinentale vluchten");
            chartWereld.data.datasets[0].data.splice(0);
            filterdataWereld(currentAirport, "2014JJ00");
            filterdataWereld(currentAirport, "2015JJ00");
            filterdataWereld(currentAirport, "2016JJ00");
            filterdataWereld(currentAirport, "2017JJ00");
            filterdataWereld(currentAirport, "2018JJ00");
            $("#myChart").hide();
            $("#chartPassagiers").hide();
            $("#chartWereld").show();
            $("#chartGoederen").hide();
        }
        if (e.target.id == "passagier")
        /*Dit zorgt ervoor dat de chart de informatie kan binnenhalen die binnengehaald moeten worden. Ook zorgt dit ervoor dat de juiste chart getoont wordt en de andere gehide worden.
        Verder zorgt dit ervoor dat wanneer er op het icon gedrukt wordt er data binnengehaald wordt over de genoemde onderwerpen. De filterdata die genoemd wordt zorgt ervoor dat de juiste informatie uit de dataset gefilterd wordt*/
        {
            filterData3(currentAirport, huidigeJaartal, "#totaalPassagiers", "#totaalVetrokkenPassagiers", "#totaalAangekomenPassagiers", "#totaalGeregeldePassagiers", "#totaalOnGeregeldePassagiers");
            $('#vergelijking').text("Vergelijking totaal aantal Passagiers");
            chartPassagiers.data.datasets[0].data.splice(0);
            filterdataPassagiers(currentAirport, "2014JJ00");
            filterdataPassagiers(currentAirport, "2015JJ00");
            filterdataPassagiers(currentAirport, "2016JJ00");
            filterdataPassagiers(currentAirport, "2017JJ00");
            filterdataPassagiers(currentAirport, "2018JJ00");
            $("#myChart").hide();
            $("#chartWereld").hide();
            $("#chartPassagiers").show();
            $("#chartGoederen").hide();
        }
        if (e.target.id == "goederen")
        /*Dit zorgt ervoor dat de chart de informatie kan binnenhalen die binnengehaald moeten worden. Ook zorgt dit ervoor dat de juiste chart getoont wordt en de andere gehide worden.
        Verder zorgt dit ervoor dat wanneer er op het icon gedrukt wordt er data binnengehaald wordt over de genoemde onderwerpen. De filterdata die genoemd wordt zorgt ervoor dat de juiste informatie uit de dataset gefilterd wordt*/
        {
            filterData4(currentAirport, huidigeJaartal, "#totaalGoederenVervoer", "#totaalGelosteGoederen", "#totaalGeladenGoederen", "#totaalPostVervoer", "#totaalGelostePost");
            $('#vergelijking').text("Vergelijking totaal goederenvervoer");
            chartGoederen.data.datasets[0].data.splice(0);
            filterdataGoederen(currentAirport, "2014JJ00");
            filterdataGoederen(currentAirport, "2015JJ00");
            filterdataGoederen(currentAirport, "2016JJ00");
            filterdataGoederen(currentAirport, "2017JJ00");
            filterdataGoederen(currentAirport, "2018JJ00");
            $("#myChart").hide();
            $("#chartWereld").hide();
            $("#chartPassagiers").hide();
            $("#chartGoederen").show();
        }
    })
}


//De basis voor de filterData functies. Bronvermelding: Daniël Sturing, Ahmet Yavas.
/**
 * @param  {} airport
 * @param  {} period
 * @param  {} docElement
 * @param  {} docElement2
 * @param  {} docElement3
 * @param  {} docElement4
 * @param  {} docElement5
 * 
 * De functies filterData1 t/m filterdata4 zorgen ervoor dat de gewenste data gefilterd wordt. De gewenste data wordt in de docElements geplaatst.
 */
function filterData(airport, period, docElement, docElement2, docElement3, docElement4, docElement5) {
    filteredData = allDataFull.filter(function (item) {
        if (item.Luchthavens == airport && item.Perioden == period) {
            $(docElement).text("Totaal aantal vluchten: " + item.TotaalAlleVluchten_3)
            $(docElement2).text("Totaal vertrokken vluchten: " + item.TotaalVertrokkenVluchten_9)
            $(docElement3).text("Totaal aangekomen vluchten: " + item.TotaalAangekomenVluchten_6)
            $(docElement4).text("Totaal geregelde vluchten: " + item.GeregeldeVluchten_4)
            $(docElement5).text("Totaal ongeregelde vluchten: " + item.OngeregeldeVluchten_5)
        }
    })
}
/**
 * @param  {} airport
 * @param  {} period
 * @param  {} docElement
 * @param  {} docElement2
 * @param  {} docElement3
 * @param  {} docElement4
 * @param  {} docElement5
 */
function filterData2(airport, period, docElement, docElement2, docElement3, docElement4, docElement5) {
    filteredData = allDataFull.filter(function (item) {
        if (item.Luchthavens == airport && item.Perioden == period) {
            $(docElement).text("Totaal wereld: " + item.TotaalOpIntercontinentaleVluchten_25)
            $(docElement2).text("naar Afrika: " + item.Afrika_26)
            $(docElement3).text("naar Amerika: " + item.Amerika_32)
            $(docElement4).text("naar Azië: " + item.Azie_36)
            $(docElement5).text("naar Europa: " + item.EuropaTotaal_22)
        }
    })
}
/**
 * @param  {} airport
 * @param  {} period
 * @param  {} docElement
 * @param  {} docElement2
 * @param  {} docElement3
 * @param  {} docElement4
 * @param  {} docElement5
 */
function filterData3(airport, period, docElement, docElement2, docElement3, docElement4, docElement5) {
    filteredData = allDataFull.filter(function (item) {
        if (item.Luchthavens == airport && item.Perioden == period) {
            $(docElement).text("Totaal aantal passagiers: " + item.TotaalAantalPassagiers_12)
            $(docElement2).text("Totaal vertrokken passagiers: " + item.TotaalVertrokkenPassagiers_18)
            $(docElement3).text("Totaal aangekomen passagiers: " + item.TotaalAangekomenPassagiers_15)
            $(docElement4).text("Passagiers geregelde vluchten: " + item.PassagiersOpOngeregeldeVluchten_14)
            $(docElement5).text("Passagiers ongeregelde vluchten: " + item.PassagiersOpGeregeldeVluchten_13)

        }
    })
}
/**
 * @param  {} airport
 * @param  {} period
 * @param  {} docElement
 * @param  {} docElement2
 * @param  {} docElement3
 * @param  {} docElement4
 * @param  {} docElement5
 */
function filterData4(airport, period, docElement, docElement2, docElement3, docElement4, docElement5) {
    filteredData = allDataFull.filter(function (item) {
        if (item.Luchthavens == airport && item.Perioden == period) {
            $(docElement).text("Totaal goederen vervoer: " + item.TotaalGoederenvervoer_43)
            $(docElement2).text("Totaal geloste goederen: " + item.TotaalGelosteGoederen_46)
            $(docElement3).text("Totaal geladen goederen: " + item.TotaalGeladenGoederen_49)
            $(docElement4).text("Totale post vervoer: " + item.TotalePostvervoer_74)
            $(docElement5).text("Totaal geloste post: " + item.TotaalGelostePost_77)

        }
    })
}




/**
 * @param  {} airport
 * @param  {} period
 * 
 * De functies filterdataEelde/filterdataWereld/filterdataPassagiers/filterdataGoederen zorgen ervoor dat de chart geupdate kan worden en ook de gewenste data binnenhaalt en in de juiste array * worden gepushed.
 */
function filterdateEelde(airport, period) {
    filteredData = allDataFull.filter(function (item) {
        if (item.Luchthavens == airport && item.Perioden == period) {
            myChart.data.datasets[0].data.push(item.TotaalAlleVluchten_3);
            myChart.update();
            console.log(item.TotaalAlleVluchten_3);
        }
    })
}
/**
 * @param  {} airport
 * @param  {} period
 */
function filterdataWereld(airport, period) {
    filteredData = allDataFull.filter(function (item) {
        if (item.Luchthavens == airport && item.Perioden == period) {
            chartWereld.data.datasets[0].data.push(item.TotaalOpIntercontinentaleVluchten_25);
            chartWereld.update();
            console.log(item.TotaalOpIntercontinentaleVluchten_25);
        }
    })
}
/**
 * @param  {} airport
 * @param  {} period
 */
function filterdataPassagiers(airport, period) {
    filteredData = allDataFull.filter(function (item) {
        if (item.Luchthavens == airport && item.Perioden == period) {
            chartPassagiers.data.datasets[0].data.push(item.TotaalAantalPassagiers_12);
            chartPassagiers.update();
            console.log(item.TotaalAantalPassagiers_12);
        }
    })
}

/**
 * @param  {} airport
 * @param  {} period
 */
function filterdataGoederen(airport, period) {
    filteredData = allDataFull.filter(function (item) {
        if (item.Luchthavens == airport && item.Perioden == period) {
            chartGoederen.data.datasets[0].data.push(item.TotaalGoederenvervoer_43);
            chartGoederen.update();
            console.log(item.TotaalGoederenvervoer_43);
        }
    })
}
