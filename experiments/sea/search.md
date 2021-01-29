---
layout: sea_search
type: example
index: 0
title: Search RHA Gateway Database
noindex: true
---

<style>
.temp-filter-columns {

}

@media (min-width: 768px) {
    .temp-filter-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }
}
</style>


<div class="filters">
    <div class="temp-filter-columns">
        <fieldset>
            <legend class="visually-hidden">Case information</legend>
            <label class="ds_label" for="search1_SectorDropDownList" id="search1_Label1">Sector</label>

            <div class="ds_select-wrapper">
                <select class="ds_select" name="search1$SectorDropDownList" id="search1_SectorDropDownList">
                    <option></option>
                    <option>Accordion</option>
                    <option>Breadcrumbs</option>
                    <option>Button</option>
                    <!-- <option selected="selected" value="1">-</option>
                    <option value="2">Agriculture</option>
                    <option value="3">Forestry</option>
                    <option value="4">Fisheries</option>
                    <option value="5">Energy</option>
                    <option value="6">Industry</option>
                    <option value="7">Transport</option>
                    <option value="8">Waste Management</option>
                    <option value="9">Water Management</option>
                    <option value="10">Telecommunications</option>
                    <option value="11">Tourism</option>
                    <option value="12">Town and Country or Land use</option>
                    <option value="14">Miscellaneous</option>
                    <option value="15">Legislation/Policy</option>
                    <option value="16">Educational</option>
                    <option value="17">Health</option>
                    <option value="18">Economic</option>
                    <option value="19">Community</option> -->
                </select>
                <span class="ds_select-arrow" aria-hidden="true"></span>
            </div>

            <label class="ds_label" for="search1_TypeOfPlanDropDownList" id="search1_Label2">Type of Plan, Program, Strategy
                (PPS)</label>
            <div class="ds_select-wrapper">
                <select class="ds_select" name="search1$TypeOfPlanDropDownList" id="search1_TypeOfPlanDropDownList">
                    <option></option>
                    <option>Accordion</option>
                    <option>Breadcrumbs</option>
                    <option>Button</option>
                    <!-- <option selected="selected" value="1">-</option>
                    <option value="2">Access and tourism </option>
                    <option value="3">Housing</option>
                    <option value="4">Local Plans</option>
                    <option value="5">Arts, culture and leisure </option>
                    <option value="6">Carbon Management </option>
                    <option value="7">Development plans and Masterplans</option>
                    <option value="8">Structure and City plans</option>
                    <option value="9">Climate change, flooding and soils </option>
                    <option value="10">Corporate and Strategic </option>
                    <option value="11">Miscellaneous</option>
                    <option value="12">Management </option>
                    <option value="13">Economic </option>
                    <option value="14">Environmental and conservation </option>
                    <option value="15">Transport </option>
                    <option value="16">National Parks</option>
                    <option value="17">Energy and Renewable </option>
                    <option value="18">Planning </option>
                    <option value="19">Local Development Plan</option>
                    <option value="20">Strategic Development Plan</option> -->
                </select>
                <span class="ds_select-arrow" aria-hidden="true"></span>
            </div>

            <label class="ds_label" for="search1_StageDropDownList" id="search1_Label3">Latest Stage of Plan</label>
            <div class="ds_select-wrapper">
                <select class="ds_select" name="search1$StageDropDownList" id="search1_StageDropDownList">
                    <option></option>
                    <option>Accordion</option>
                    <option>Breadcrumbs</option>
                    <option>Button</option>
                    <!-- <option selected="selected" value="1">-</option>
                    <option value="2">Pre-Screening</option>
                    <option value="3">Screening</option>
                    <option value="4">Screening Determination</option>
                    <option value="5">Scoping</option>
                    <option value="6">Environmental Report</option>
                    <option value="7">Final Environmental Report</option>
                    <option value="8">Post Adoption</option> -->
                </select>
                <span class="ds_select-arrow" aria-hidden="true"></span>
            </div>

            <label class="ds_label" for="search1_LegislationDropDownList" id="search1_Label4">Legislation</label>
            <div class="ds_select-wrapper">
                <select class="ds_select" name="search1$LegislationDropDownList" id="search1_LegislationDropDownList">
                    <option></option>
                    <option>Accordion</option>
                    <option>Breadcrumbs</option>
                    <option>Button</option>
                    <!-- <option selected="selected" value="1">-</option>
                    <option value="2">Section 5(3) of 2005 Act; </option>
                    <option value="3">Section 5(4) of 2005 Act; </option>
                    <option value="4">Voluntary SEA; </option>
                    <option value="5">2004 Regulations Scotland</option>
                    <option value="6">2004 Regulations UK</option>
                    <option value="7">EU Directive</option> -->
                </select>
            <span class="ds_select-arrow" aria-hidden="true"></span>
            </div>

            <label class="ds_label" for="search1_ResponsibleAuthorityDropDownList" id="search1_Label5">Responsible Authority</label>
            <div class="ds_select-wrapper">
                <select class="ds_select" name="search1$ResponsibleAuthorityDropDownList"
                    id="search1_ResponsibleAuthorityDropDownList">
                    <option></option>
                    <option>Accordion</option>
                    <option>Breadcrumbs</option>
                    <option>Button</option>
                    <!-- <option selected="selected" value="1">-</option>
                    <option value="132">Aberdeen City and Shire Strategic Development Planning Authority</option>
                    <option value="2">Aberdeen City Council</option>
                    <option value="3">Aberdeenshire Council</option>
                    <option value="117">Accountant in Bankruptcy</option>
                    <option value="4">Angus Council</option>
                    <option value="68">arc21</option>
                    <option value="5">Argyll and Bute Council</option>
                    <option value="104">Ayrshire Biodiversity Action Plan Steering Group</option>
                    <option value="107">Ayrshire Joint Planning Unit</option>
                    <option value="6">Ayrshire Joint Structure Plan and Transportation Committee</option>
                    <option value="109">British Waterways Scotland</option>
                    <option value="7">Cairngorms National Park Authority</option>
                    <option value="94">Central Scotland Green Network</option>
                    <option value="8">City of Edinburgh Council</option>
                    <option value="9">Clackmannanshire Council</option>
                    <option value="136">Clyde Marine Planning Partnership</option>
                    <option value="10">Comhairle nan Eilean Siar</option>
                    <option value="11">Communities Scotland</option>
                    <option value="130">Creative Scotland</option>
                    <option value="133">Crown Estate Scotland</option>
                    <option value="123">Cumbria County Council</option>
                    <option value="114">Danish Ministry of the Environment</option>
                    <option value="12">Deer commission Scotland</option>
                    <option value="100">Defence Equipment and Support</option>
                    <option value="74">Department for Business Enterprise and Regulatory Reform</option>
                    <option value="139">Department for Business, Energy &amp; Industrial Strategy</option>
                    <option value="106">Department for Communities and Local Government</option>
                    <option value="83">Department for Environment Food and Rural Affairs</option>
                    <option value="125">Department of Communications Energy and Natural Resources</option>
                    <option value="89">Department of Energy and Climate Change</option>
                    <option value="69">Department of Trade and Industry</option>
                    <option value="122">Department of Transport</option>
                    <option value="13">Dumfries and Galloway Council</option>
                    <option value="14">Dundee city Council</option>
                    <option value="124">Dutch Ministry of Infrastructure and the Environment</option>
                    <option value="15">East Ayrshire Council</option>
                    <option value="16">East Dunbartonshire Council</option>
                    <option value="17">East Lothian Council</option>
                    <option value="18">East Renfrewshire Council</option>
                    <option value="99">Edinburgh and Lothians Greenspace Trust</option>
                    <option value="105">Environment Agency</option>
                    <option value="118">EventScotland</option>
                    <option value="20">Falkirk Council</option>
                    <option value="21">Fife Council</option>
                    <option value="82">Firth of Clyde Forum </option>
                    <option value="120">Forest Enterprise Scotland</option>
                    <option value="22">Forestry Commission Scotland</option>
                    <option value="96">Forestry Framework for Edinburgh and the Lothians</option>
                    <option value="115">German Federal Maritime and Hydrographic Agency</option>
                    <option value="81">German Federal Ministry of Transport Building and Urban Affairs</option>
                    <option value="97">Glasgow and Clyde Valley Strategic Development Planning Authority</option>
                    <option value="23">Glasgow and Clyde Valley structure plan committee</option>
                    <option value="24">Glasgow City Council</option>
                    <option value="93">Glasgow college of commerce</option>
                    <option value="91">High speed two ltd</option>
                    <option value="26">Highland and Island enterprise</option>
                    <option value="27">Highland Council</option>
                    <option value="25">Highlands and Islands Airport Ltd</option>
                    <option value="29">Highlands and Islands Transport Partnership in Scotland (HITRANS)</option>
                    <option value="127">Historic Environment Scotland</option>
                    <option value="28">Historic Scotland </option>
                    <option value="79">Interact Management Authority</option>
                    <option value="76">INTERREG</option>
                    <option value="75">INTERREG IVB</option>
                    <option value="77">INTERREG IVC</option>
                    <option value="30">Inverclyde Council</option>
                    <option value="63">Irvine Bay Regeneration Company</option>
                    <option value="103">Keeper of the Registers of Scotland</option>
                    <option value="31">Loch Lomond and The Trossachs National Park Authority</option>
                    <option value="78">Luxemburg ministry for the interior and spatial planning</option>
                    <option value="95">Marine Scotland</option>
                    <option value="110">Metropolitan Glasgow Strategic Drainage Partnership</option>
                    <option value="32">Midlothian Council</option>
                    <option value="71">Ministry of Defence</option>
                    <option value="33">Moray Council</option>
                    <option value="34">Moray Licensing Board</option>
                    <option value="101">National Archives of Scotland</option>
                    <option value="135">National Records Scotland</option>
                    <option value="88">National Services Scotland</option>
                    <option value="98">National Trust for Scotland</option>
                    <option value="121">NHS Dumfries and Galloway</option>
                    <option value="85">NHS Health Scotland</option>
                    <option value="102">NHS Tayside</option>
                    <option value="35">North Ayrshire Council</option>
                    <option value="36">North East Scotland Regional Transport Partnership (NESTRANS)</option>
                    <option value="37">North Lanarkshire Council</option>
                    <option value="90">North Regional Development Agency</option>
                    <option value="73">Nuclear Decommissioning Authority</option>
                    <option value="70">One North East</option>
                    <option value="38">Orkney Islands Council</option>
                    <option value="39">Pentland Hills Regional partnership</option>
                    <option value="40">Perth and Kinross Council</option>
                    <option value="128">Police Scotland</option>
                    <option value="41">Renfrewshire Council</option>
                    <option value="84">Scottish Biodiversity Forum</option>
                    <option value="42">Scottish Borders Council</option>
                    <option value="113">Scottish Canals</option>
                    <option value="66">Scottish Enterprise</option>
                    <option value="45">Scottish Environment Protection Agency (SEPA)</option>
                    <option value="43">Scottish Executive</option>
                    <option value="48">Scottish Natural Heritage (SNH)</option>
                    <option value="129">Scottish Police Authority</option>
                    <option value="44">Scottish Water</option>
                    <option value="86">SESplan</option>
                    <option value="126">SG, DETI, DCENR</option>
                    <option value="46">Shetland Islands Council</option>
                    <option value="137">Shetland Islands Marine Planning Partnership</option>
                    <option value="47">Shetland Regional Transport Partnership</option>
                    <option value="119">Sites and Monuments Records Forum</option>
                    <option value="138">SNIFFER</option>
                    <option value="134">Social Security Directorate</option>
                    <option value="49">South Ayrshire Council</option>
                    <option value="50">South East Scotland Regional Transport Partnership (SESTRANS)</option>
                    <option value="65">South Lanarkshire Council</option>
                    <option value="51">South West of Scotland Transport Partnership </option>
                    <option value="80">Special EU Programmes Body</option>
                    <option value="52">Sportscotland</option>
                    <option value="92">SSMEI Shetland local steering group</option>
                    <option value="53">Stirling Council</option>
                    <option value="54">Strathclyde partnership for transport</option>
                    <option value="55">Tayside and Central Scotland Regional Transport Partnership</option>
                    <option value="67">Tayside Procurement Consortium</option>
                    <option value="108">Thames Water</option>
                    <option value="116">The Crofting Commission</option>
                    <option value="64">The Scottish Government</option>
                    <option value="87">The Scottish Mountain bike development consortium</option>
                    <option value="131">Transport for the North</option>
                    <option value="56">Transport Scotland</option>
                    <option value="57">VisitScotland</option>
                    <option value="72">Welsh Assembly Government </option>
                    <option value="58">West Dunbartonshire Council</option>
                    <option value="59">West Lothian Council</option>
                    <option value="60">Western Isles Council</option> -->
                </select>
                <span class="ds_select-arrow" aria-hidden="true"></span>
            </div>
        </fieldset>

        <fieldset>
            <legend class="visually-hidden">Case information and date</legend>
            <label class="ds_label" for="search1_CaseNumberTextBox" id="search1_Label6">Case Number</label>
            <input class="ds_input" name="search1$CaseNumberTextBox" type="text" id="search1_CaseNumberTextBox" />

            <label class="ds_label" for="search1_NameTitleTextBox" id="search1_Label7">Name / Title</label>
            <input class="ds_input" name="search1$NameTitleTextBox" type="text" id="search1_NameTitleTextBox" />

            <label class="ds_label" for="search1_KeywordsTextBox" id="search1_Label8">Keyword(s)</label>
            <input class="ds_input" name="search1$KeywordsTextBox" type="text" id="search1_KeywordsTextBox" />

            <div data-module="ds-datepicker" class="ds_datepicker">
                <label class="ds_label" for="from-date">Date from</label>
                <div class="ds_input__wrapper">
                    <input id="from-date" placeholder="dd/mm/yyyy" type="text" class="ds_input  ds_input--fixed-10">
                </div>
            </div>

            <div data-module="ds-datepicker" class="ds_datepicker">
                <label class="ds_label" for="to-date">Date to</label>
                <div class="ds_input__wrapper">
                    <input id="to-date" placeholder="dd/mm/yyyy" type="text" class="ds_input  ds_input--fixed-10">
                </div>
            </div>
        </fieldset>

    </div>

    <input type="submit" name="search1$SearchButton" value="Search" id="search1_SearchButton" class="ds_button  ds_button--fixed" />
    <button name="search1$ClearSearchButton" value="Reset" id="search1_ClearSearchButton" class="ds_button  ds_button--cancel  ds_button--fixed">Reset</button>
</div>

<div class="results">
    <p class="ds_search-results__count js-search-results-count"><b>68</b> results</p>

    <div class="overflow--medium--4  overflow--large--4  overflow--xlarge--4">
        <table class="ds_table" id="search1_GridView1" data-smallscreen="scrolling">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Responsible Authority</th>
                    <th scope="col">Legislation</th>
                    <th scope="col">Stage</th>
                    <th scope="col">Date Last Modified</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="case.html">RHA\00001</a></td>
                    <td>Hartside Harbour Masterplan</td>
                    <td>Hartside Council</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Screening</td>
                    <td>10/12/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00002</a></td>
                    <td>Hartside Onshore Wind Energy Non-statutory guidance 2020 </td>
                    <td>Hartside Council</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Screening</td>
                    <td>10/12/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00003</a></td>
                    <td>House Extension &amp; Alteration Design Guide </td>
                    <td>Hartside Council</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Screening</td>
                    <td>10/12/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00004</a></td>
                    <td>Update of Burn Basin Management Plans </td>
                    <td>Hartside Environment Protection Agency (EPA)</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Screening</td>
                    <td>10/12/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00005</a></td>
                    <td>Use of the Design System for the SEA Gateway Database</td>
                    <td>The Scottish Government</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Screening</td>
                    <td>10/12/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00006</a></td>
                    <td>Hartside Development Plan for Crofting </td>
                    <td>The Hartside Government</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Screening</td>
                    <td>10/12/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00007</a></td>
                    <td>Transferring responsibility for the authorisation of discharge leftover homebrew
                    </td>
                    <td>Marine Hartside</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Pre-Screening</td>
                    <td>19/08/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00008</a></td>
                    <td>Strategic Plan 2021-2026 </td>
                    <td>Hartside Council</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Pre-Screening</td>
                    <td>19/08/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00009</a></td>
                    <td>Hartside Local Housing Strategy 2020-2022</td>
                    <td>Hartside Council</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Screening</td>
                    <td>10/12/2020</td>
                </tr>
                <tr>
                    <td><a href="case.html">RHA\00010</a></td>
                    <td>Hartside Investment Plan</td>
                    <td>The Scottish Government</td>
                    <td>Section 5(3) of 2005 Act; </td>
                    <td>Screening</td>
                    <td>10/12/2020</td>
                </tr>
            </tbody>
        </table>

        <nav class="ds_pagination" aria-label="Pages">
            <ul class="ds_pagination__list">
                <li class="ds_pagination__item" aria-current="page">
                    <span class="ds_pagination__link  ds_current">1</span>
                </li>

                <li class="ds_pagination__item">
                    <a href="#" class="ds_pagination__link">2</a>
                </li>

                <li class="ds_pagination__item">
                    <a href="#" class="ds_pagination__link">3</a>
                </li>

                <li class="ds_pagination__item">
                    <a href="#" class="ds_pagination__link">4</a>
                </li>

                <li class="ds_pagination__item">
                    <a href="#" class="ds_pagination__link">5</a>
                </li>

                <li class="ds_pagination__item">
                    <a href="#" class="ds_pagination__link">6</a>
                </li>

                <li class="ds_pagination__item">
                    <a href="#" class="ds_pagination__link">7</a>
                </li>

                <li class="ds_pagination__item" aria-hidden="true">
                    <span class="ds_pagination__link  ds_pagination__link--ellipsis">&hellip;</span>
                </li>

                <li class="ds_pagination__item">
                    <a href="#" class="ds_pagination__link  ds_pagination__link--text">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</div>
