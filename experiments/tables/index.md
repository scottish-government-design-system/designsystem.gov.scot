---
layout: example
type: example
index: 0
---
<style>

table {
    border: 1px solid #ccc;
    font-size: 16px;
    line-height: 21px;
    width: 100%;
}

th {
    background-color: #ebebeb;
    font-weight: bold;
    position: relative;
    text-align: left;
}

th,
td {
    vertical-aign: top;
}

th[colspan] {
    border: 1px solid #ccc;
}

th:not(:first-child)::before {
    border-left: 1px solid #ccc;
    bottom: 7px;
    content: '';
    left: -1px;
    position: absolute;
    top: 7px;
}

tr> * {
    padding: 7px 20px 7px 10px;
}

tr:hover {
    background-color: #fafafa;
}

tr {
    border-bottom: 1px solid #ebebeb;
}

tr:last-child {
    border-bottom-color: #ccc;
}

@media only screen and (max-width: 768px) {
    .boxy thead {
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        overflow: hidden;
        position: absolute !important;
    }

    .boxy {
        border: 0;
    }

    .boxy tr {
        border: 0;
        display: block;
        margin-bottom: 14px;
    }

    .boxy tr:hover {
        background-color: transparent;
    }

    .boxy tr> * {
        display: block;
        overflow: auto;
    }

    .boxy tr> * {
        border: 1px solid #ccc;
    }

    .boxy tr> td:not(:last-child) {
        border-bottom-color: #ebebeb;
    }

    .boxy tr> th:last-child {
        border-width: 0;
        margin-top: 28px;
    }

    .boxy tr> td:not(:first-child) {
        border-top-width: 0;
    }

    .boxy tr> td::before {
        content: attr(data-heading);
        display: block;
        float: left;
        font-weight: bold;
        margin-right: 15px;
        width: calc(50% - 15px);
    }

    .boxy tr> td:first-child {
        box-shadow: inset 0 4px 0 #ebebeb;
        padding-top: 11px
    }




    .scrolly {
        display: block;
        max-width: 100%;
        overflow-x: auto;

    }
}

</style>

<h1>Design system tables</h1>

<h2>Simple, squashable</h2>

<table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Holiday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>10 April</td>
            <td>Friday</td>
            <td>Good Friday</td>
        </tr>
        <tr>
            <td>8 May</td>
            <td>Friday</td>
            <td>Early May Bank Holiday</td>
        </tr>
        <tr>
            <td>25 May</td>
            <td>Monday</td>
            <td>Spring Bank Holiday</td>
        </tr>
        <tr>
            <td>3 August</td>
            <td>Monday</td>
            <td>Summer Bank Holiday</td>
        </tr>
    </tbody>
</table>

<h2>Many columns, boxes</h2>

<table class="boxy">
    <thead>
        <tr>
            <th>Year</th>
            <th>All court types</th>
            <th>High court</th>
            <th>Sheriff solemn</th>
            <th>Sheriff summary</th>
            <th>Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2014-15</td>
            <td>106,584</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
        </tr>
        <tr>
            <td>2015-16</td>
            <td>99,692</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
        </tr>
        <tr>
            <td>2016-17</td>
            <td>92,347</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
        </tr>
        <tr>
            <td>2017-18</td>
            <td>83,179</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
        </tr>
        <tr>
            <td>2018-19</td>
            <td>78,503</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
        </tr>
    </tbody>
</table>



<h2>Many columns, subheadings, boxes</h2>

<table class="boxy">
    <thead>
        <tr>
            <th>Year</th>
            <th>All court types</th>
            <th>High court</th>
            <th>Sheriff solemn</th>
            <th>Sheriff summary</th>
            <th>Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr><th colspan="6">Old</th></tr>
        <tr>
            <td>2014-15</td>
            <td>106,584</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
        </tr>
        <tr>
            <td>2015-16</td>
            <td>99,692</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
        </tr>
        <tr>
            <td>2016-17</td>
            <td>92,347</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
        </tr>
        <tr><th colspan="6">Recent</th></tr>
        <tr>
            <td>2017-18</td>
            <td>83,179</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
        </tr>
        <tr>
            <td>2018-19</td>
            <td>78,503</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
        </tr>
    </tbody>
</table>



<h2>Heading cell in first column</h2>

<table class="boxy">
    <thead>
        <tr>
            <th></th>
            <th>All court types</th>
            <th>High court</th>
            <th>Sheriff solemn</th>
            <th>Sheriff summary</th>
            <th>Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>2014-15</th>
            <td>106,584</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
        </tr>
        <tr>
            <th>2015-16</th>
            <td>99,692</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
        </tr>
        <tr>
            <th>2016-17</th>
            <td>92,347</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
        </tr>
        <tr>
            <th>2017-18</th>
            <td>83,179</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
        </tr>
        <tr>
            <th>2018-19</th>
            <td>78,503</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
        </tr>
    </tbody>
</table>

<h2>Scrolling</h2>

<table class="scrolly">
    <thead>
        <tr>
            <th>Year</th>
            <th>All court types</th>
            <th>High court</th>
            <th>Sheriff solemn</th>
            <th>Sheriff summary</th>
            <th>Justice of the Peace court</th>

            <th>Year</th>
            <th>All court types</th>
            <th>High court</th>
            <th>Sheriff solemn</th>
            <th>Sheriff summary</th>
            <th>Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-title="">2014-15</td>
            <td>106,584</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>

            <td>2014-15</td>
            <td>106,584</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
            <td>594</td>
        </tr>
        <tr>
            <td>2015-16</td>
            <td>99,692</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>

            <td>2015-16</td>
            <td>99,692</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
            <td>603</td>
        </tr>
        <tr>
            <td>2016-17</td>
            <td>92,347</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>

            <td>2016-17</td>
            <td>92,347</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
            <td>649</td>
        </tr>
        <tr>
            <td>2017-18</td>
            <td>83,179</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>

            <td>2017-18</td>
            <td>83,179</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
            <td>598</td>
        </tr>
        <tr>
            <td>2018-19</td>
            <td>78,503</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>

            <td>2018-19</td>
            <td>78,503</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
            <td>585</td>
        </tr>
    </tbody>
</table>









<h1> Gov examples</h1>


<table cellspacing="0" class="boxy">
 <thead>
  <tr>
   <th>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div>
   <div><span><span><span><strong><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span><span>Health board</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></strong></span></span></span></div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </th>
   <th><span><span><span><strong><span><span>Positive cases</span></span></strong></span></span></span></th>
   <th><span><span><span><strong><span><span>People in hospital at midnight (confirmed or suspected)</span></span></strong></span></span></span></th>
   <th><span><span><span><strong><span><span>People in intensive care at midnight (confirmed or suspected)</span></span></strong></span></span></span></th>
  </tr>
  </thead>
  <tbody>
  <tr>
   <td><span><span><span><span><span><span>Ayrshire and Arran</span></span></span></span></span></span></td>
   <td>503</td>
   <td><span><span><span><span><span><span>110</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>13</span></span></span></span></span></span></td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Borders</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>220</span></span></span></span></span></span></td>
   <td>66</td>
   <td>6</td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Dumfries and Galloway</span></span></span></span></span></span></td>
   <td>207</td>
   <td>31</td>
   <td>6</td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Fife</span></span></span></span></span></span></td>
   <td>446</td>
   <td><span><span><span><span><span><span>126</span></span></span></span></span></span></td>
   <td>6</td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Forth Valley</span></span></span></span></span></span></td>
   <td>400</td>
   <td><span><span><span><span><span><span>97</span></span></span></span></span></span></td>
   <td>5</td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Grampian</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>389</span></span></span></span></span></span></td>
   <td>86</td>
   <td><span><span><span><span><span><span>16</span></span></span></span></span></span></td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Greater Glasgow and Clyde</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>1742</span></span></span></span></span></span></td>
   <td>606</td>
   <td><span><span><span><span><span><span>70</span></span></span></span></span></span></td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Highland</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>184</span></span></span></span></span></span></td>
   <td>60</td>
   <td>6</td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Lanarkshire</span></span></span></span></span></span></td>
   <td>911</td>
   <td><span><span><span><span><span><span>203</span></span></span></span></span></span></td>
   <td>30</td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Lothian</span></span></span></span></span></span></td>
   <td>1107</td>
   <td><span><span><span><span><span><span>284</span></span></span></span></span></span></td>
   <td>28</td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Orkney</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>5</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>*</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>*</span></span></span></span></span></span></td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Shetland</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>45</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>*</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>*</span></span></span></span></span></span></td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Tayside</span></span></span></span></span></span></td>
   <td>937</td>
   <td><span><span><span><span><span><span>118</span></span></span></span></span></span></td>
   <td>6</td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Eileanan Siar (Western Isles)</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>6</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>*</span></span></span></span></span></span></td>
   <td><span><span><span><span><span><span>*</span></span></span></span></span></span></td>
  </tr>
  <tr>
   <td><span><span><span><span><span><span>Golden Jubilee National Hospital</span></span></span></span></span></span></td>
   <td>&nbsp;</td>
   <td>9</td>
   <td><span><span><span><span><span><span>&nbsp;*</span></span></span></span></span></span></td>
  </tr>
 </tbody>
</table>



<table border="1" cellspacing="1" cellpadding="5" class="boxy"> 
 <thead>
  <tr> 
   <th class="lAlign"> <p><strong>Characteristic<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[2]</sup></a></strong></p> </th> 
   <th class="cAlign"> <p><strong>Evidence gathered and Strength/quality of evidence</strong></p> </th> 
   <th class="cAlign"> <p><strong>Source</strong></p> </th> 
   <th class="cAlign"> <p><strong>Data gaps identifiedandaction taken</strong></p> </th> 
  </tr> 
  </thead>
  <tbody>
  <tr> 
   <th class="lAlign"> <p><strong>Age</strong></p> </th> 
   <td> <p>1. The Child Rights and Wellbeing Impact Assessment (<acronym title="Children's Rights and Wellbeing Assessment">CRWIA</acronym>) sets out the evidence gathered in relation to children and young people under 18 of age.</p> <p>2. Unpublished data from the Scottish Legal Aid Board (<acronym title="Scottish Legal Aid Board">SLAB</acronym>) suggests that between April 2017 and April 2019 24% of granted legal aid applications were to parties between the ages of 25 to 29. This figure drops to 20% for 30 to 34 year olds and 15% for 35 to 39 year olds. Therefore, the Bill will affect individuals between 25 to 29 year olds more as a number of the provisions in the Bill will affect court procedure in cases under section 11 of the 1995 Act.</p> <p>3. In 2018/2019 the ratios for children being placed on a new supervision order by a children's hearing were:</p> <p>42% under 5</p> <p>28% 6-11</p> <p>30% 12 and above</p> <p>For adoptions the data shows us that the proceedings</p> <p>breakdown in ages is:</p> <p>49% under 5</p> <p>20% over 14</p> <p>4. At 31 July 2018, there were an estimated 14,738 looked after children in Scotland.</p> <p>5. In 2018/19, 31,653 Children's Hearings were held for 13,667 children and young people.</p> <p><strong>Ensuring the views of the child are</strong><strong> heard</strong></p> <p>6. More younger children are likely to be affected by the provisions in the Bill which remove the legal presumption that a child aged 12 or over is considered mature enough to give their views. The Bill amends sections 6, 11 and 16 of the Children (Scotland) Act 1995 (the 1995 Act), as well as sections 14 and 84 of the Adoption and Children (Scotland) Act 2007 and section 27 of the Children’s Hearings (Scotland) Act 2011.</p> <p>7. Unpublished <acronym title="Scottish Legal Aid Board">SLAB</acronym> data shows that between 2015 and 2017 they funded 32 applications from children for legal aid to app dear directly before the judge or sheriff. 30 out of the 32 applications came from children aged 12 or over.</p> <p>8. Prior to a child or young person attending a Children's Hearing, they are able to express their views either through <acronym title="Scottish Children's Reporter Administration">SCRA</acronym>'s All About Me form or through social work's child views form. In 2018/19 <acronym title="Scottish Children's Reporter Administration">SCRA</acronym> recorded receipt of 2,735 of these forms for 1,998 children and young people. This was a 4.8% increase from 2017/18 (126 more forms).</p> <p><strong>Protecting victims of domestic </strong><strong>abuse</strong></p> <p>9. Provisions in the Bill that restrict personal conduct of cases in proceedings involving vulnerable witnesses and protect vulnerable parties through special measures will positively affect victims of domestic abuse. Scottish Government statistics on domestic abuse suggest that in 2017/18:</p> 
    <table border="1" cellspacing="1" cellpadding="5"> 
     <thead>
      <tr> 
       <th class="lAlign">Age</th>
       <th class="cAlign">% of victims of domestic abuse</th> 
      </tr> 
      </thead>
      <tbody>
      <tr> 
       <th class="lAlign">16-18</th>
       <td>4</td> 
      </tr> 
      <tr> 
       <th class="lAlign">19-21</th>
       <td>7</td> 
      </tr> 
      <tr> 
       <th class="lAlign">22-25</th>
       <td>12</td> 
      </tr> 
      <tr> 
       <th class="lAlign">26-30</th>
       <td>17</td> 
      </tr> 
      <tr> 
       <th class="lAlign">31-35</th>
       <td>15</td> 
      </tr> 
      <tr> 
       <th class="lAlign">36-40</th>
       <td>12</td> 
      </tr> 
      <tr> 
       <th class="lAlign">41-50</th>
       <td>15</td> 
      </tr> 
      <tr> 
       <th class="lAlign">51-60</th>
       <td>6</td> 
      </tr> 
      <tr> 
       <th class="lAlign">61 and over</th>
       <td>2</td> 
      </tr> 
      <tr> 
       <th class="lAlign">Not Recorded</th>
       <td>10</td> 
      </tr> 
     </tbody>
    </table> <p>10. The provision prohibiting personal conduct of a case if an individual has committed a serious criminal offence is likely to affect more people over the age of</p> <p>21. Scottish Government statistics on criminal proceedings for 2017/18 suggest that 11% of convictions for homicide, attempted murder, other non-sexual crimes of violence, sexual crimes, rape and attempted rape, sexual assault, other sexual crimes, common assault and breach of the peace were committed by under 21s.</p> <p><strong>Regulation of child contact </strong><strong>centres</strong></p> <p>11. Younger parents may be affected by the provisions regulating child contact centres. Unpublished data from Relationships Scotland suggests that in 2017/18 58% of individuals using child contact centres were aged 20-29 and 26% were aged 30-39. At the independent contact centre in Glasgow 38% of individuals who gave their age were between 20 and 29.</p> <p>12. Regulation of contact centres will affect children. In 2018/19, 2,572 children were able to maintain contact with a non-resident parent by using Relationships Scotland contact centres. The independent contact centre in Aberdeen says that it provides support for up to 12 families per year at their contact centre The Inverclyde contact centre dealt with 60 children from 53 families in 2016 and 76 children from 58 families in 2017. 25 of these children were aged 3 and under, 20 were 4-6, 17 were 7-10 and 6 were aged 11 and over.</p> </td> 
   <td rowspan="1"> <p>2. <acronym title="Scottish Legal Aid Board">SLAB</acronym> data</p> <p>3. <acronym title="Scottish Children's Reporter Administration">SCRA</acronym> statistics<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[3]</sup></a></p> <p>4. Data from Scottish Government<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[4]</sup></a></p> <p>5. <acronym title="Scottish Children's Reporter Administration">SCRA</acronym> statistics<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[5]</sup></a></p> <p>7. <acronym title="Scottish Legal Aid Board">SLAB</acronym> data</p> <p>8. <acronym title="Scottish Children's Reporter Administration">SCRA</acronym> statistics<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[6]</sup></a></p> <p>9. Data from Scottish Government<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[7]</sup></a> </p> <p>10. Data from Scottish Government<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[8]</sup></a></p> <p>11. Relationships Scotland and Promoting Positive Contact. </p> <p>12. Relationships Scotland, Independent contact centres in Aberdeen and Inverclyde.</p> </td> 
   <td rowspan="1"> <p>2. There is no data available from the Scottish Courts and Tribunals Service (<acronym title="Scottish Courts and Tribunals Service">SCTS</acronym>) on age of pursuers and defenders. Therefore, the Scottish Government has relied on data from <acronym title="Scottish Legal Aid Board">SLAB</acronym> which only covers cases where individuals are granted legal aid.</p> <p>7. There is no data available from <acronym title="Scottish Courts and Tribunals Service">SCTS</acronym> on the age of the child when court processes are initiated. </p> <p>10. There is no data on the age of the person convicted of an offence based on who the victim of the offence was.</p> <p>There is no known data gathered on how many children (or adult vulnerable witnesses) are required to give evidence in Children's Hearing cases so we cannot give figures of how many children may be protected by the new provisions</p> <p>11. There is no information from the independent contact centres in Inverclyde and in Aberdeen.</p> <p>12. No data from Promoting Positive Contact.</p> </td> 
  </tr> 
  <tr> 
   <th class="lAlign"> <p><strong>Disability</strong></p> </th> 
   <td> <p>1. More than half of pursuers reported that they have experienced moderate or severe stress during court action. The provisions in the Bill allowing the courts to authorise the use of special measures to protect vulnerable parties and also prohibiting the personal conduct of case in proceedings involving vulnerable witnesses is likely to reduce levels of stress.</p> <p><strong>Ensuring the views of the child are </strong><strong>heard</strong></p> <p>2. Research has shown that uncertainty and distress of family breakdown was compounded for children by the lack of involvement in the process. Rates of satisfaction with current arrangements were conversely higher for those who have been consulted. The provisions removing the presumption that a child aged 12 or over is considered mature enough to give their views, aimed at ensuring that the views of younger children are heard, will encourage courts to consult children more widely.</p> </td> 
   <td> <p>1. Study on Understanding Child Contact Cases in Scottish Sheriff courts<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[9]</sup></a></p> <p>2. Holt, S 2016. The voice of the child in family law: A discussion paper <em>Children &amp;</em><em> Youth</em><em>Services Review</em><em>6</em></p> </td> 
   <td> </td> 
  </tr> 
  <tr> 
   <th rowspan="1" class="lAlign"> <p><strong>Sex</strong></p> </th> 
   <td rowspan="1"> <p>1. Unpublished statistics from <acronym title="Scottish Legal Aid Board">SLAB</acronym> suggest that 82% of defenders in cases under section 11 of the 1995 Act are female compared to 18% of men. In comparison <acronym title="Scottish Legal Aid Board">SLAB</acronym> statistics suggest that 32% of pursuers are female compared to 68% of men. Therefore, the Bill will affect more women acting as defenders in cases under section 11 of the 1995 and more men acting as pursuers in these cases.</p> <p>2. 56% of children and young people referred to the Children's Panel are male and 44% are female. Therefore, the provisions in the Bill in relation to Children's Hearings may affect slightly more males than females.</p> <p><strong>Regulation of child contact </strong><strong>centres.</strong></p> <p>3. 76% of individuals using a child contact centre within the Relationships Scotland network are male. 53 families used the Inverclyde Child Contact Centre in 2016, of which three were to facilitate contact with the mother. In 2017 58 families used the centre, of which nine were to facilitate contact with the mother.</p> <p><strong>Protecting victims of domestic</strong><strong> abuse</strong></p> <p>4. Research shows that domestic abuse is alleged in half of all court actions over contact raised by a parent in Scotland. Research undertaken by the Ministry of Justice in 2009 showed that 53% of contact and residence cases in England and Wales involved allegations of domestic abuse or concerns about abduction or harm to children.</p> <p>5. Provisions in the Bill restricting personal conduct of cases in proceedings involving vulnerable witnesses and protecting vulnerable parties through special measures will affect more women than men. Statistics show that in 2017/18 81% of incidents of domestic abuse involved a female victim and male perpetrator compared to 16% of incidents where the victim is male and the perpetrator is female.</p> <p>6. In addition, research by <acronym title="Children and Family Court Advisory and Support Service">CAFCASS</acronym> and Women's Aid in 2017 shows that in England and Wales domestic abuse was alleged in 62% of child contact cases with fathers more likely to be subject of allegations than mothers.</p> <p><strong>Factors for the court to consider</strong></p> <p>7. The Bill introduces factors for the court to consider when making an order under section 11 of the 1995 Act. One of the factors is the effect that the order the court is considering to make might have on the involvement of the child's parents in the child's upbringing. This is likely to have a greater impact on men rather than women as statistics from 2010 suggest that 95% of non-resident parents in the <acronym title="United Kingdom">UK</acronym> are men.</p> <p><strong>Conferral of Parental Responsibilities and Rights</strong></p> <p>8. The Bill includes provisions giving the Scottish Ministers the power to make regulations in relation to the conferral of parental responsibilities and rights (<acronym title="Parental Responsibilities and Rights">PRRs</acronym>) on unmarried fathers where a child's birth is registered overseas and the parent has obtained overseas parental duties, rights or responsibilities in a similar way to obtaining <acronym title="Parental Responsibilities and Rights">PRRs</acronym> in Scotland. This provision would specifically affect men as unmarried fathers.</p> </td> 
   <td rowspan="1"> <p>1. <acronym title="Scottish Legal Aid Board">SLAB</acronym> statistics</p> <p>2. Data from <acronym title="Scottish Children's Reporter Administration">SCRA</acronym></p> <p>3. Data from Relationships Scotland member services and Inverclyde Child Contact centre.</p> <p>4. Mackay K. 2013. The treatment of the views of children in private law child contact disputes where there is a history of domestic abuse<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[10]</sup></a></p> <p>5. Scottish Government statistics on Domestic Abuse in Scotland<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[11]</sup></a> </p> <p>6. <acronym title="Children and Family Court Advisory and Support Service">CAFCASS</acronym> and Women's Aid research<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[12]</sup></a></p> <p>7. Equality impact Strengthening families, promoting parental responsibility: the future of child maintenance<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[13]</sup></a>. </p> <p>&nbsp;</p> </td> 
   <td rowspan="1"> <p>1. There is no data available from <acronym title="Scottish Courts and Tribunals Service">SCTS</acronym> on the sex of defenders and pursuers.</p> <p>3. No data is available from the two other independent contact centres.</p> <p>8. There are no figures on the number of unmarried fathers coming from overseas jurisdictions.</p> </td> 
  </tr> 
  <tr> 
   <th class="lAlign"> <p><strong>Pregnancy</strong><strong> and </strong><strong>Maternity</strong></p> </th> 
   <td> <p>1. Cases under section 11 of the 1995 Act are only likely to be initiated once a child has been born.</p> </td> 
   <td> </td> 
   <td> <p>1. There is no information on the age of a child when an order under section 11 of the 1995 Act is sought.</p> </td> 
  </tr> 
  <tr> 
   <th class="lAlign"> <p><strong>Gender Reassignment</strong></p> </th> 
   <td> </td> 
   <td> </td> 
   <td> <p>1. There is no information on the number of people who have undergone gender reassignment who are applying for an order under section 11 of the 1995</p> <p>Act.</p> </td> 
  </tr> 
  <tr> 
   <th rowspan="1" class="lAlign"> <p><strong>Sexual </strong><strong>Orientation</strong></p> </th> 
   <td rowspan="1"> <p>1. Scottish Government statistics show that in 2017/18 2% of domestic abuse incidents recorded by the police involved two men and 1% involved two women.</p> <p><strong>Conferral of </strong><strong><acronym title="Parental Responsibilities and Rights">PRRs</acronym></strong></p> <p>2. The provisions in the Bill giving the Scottish Ministers the power to make regulations in relation to the conferral of <acronym title="Parental Responsibilities and Rights">PRRs</acronym> on second female parents where the child's birth is registered overseas is likely to have an impact on second female parents.</p> <p>This provision covers second female parents who have obtained overseas parental duties, rights or responsibilities in a similar way to how second female parents can obtain parental responsibilities and rights in Scotland. This would mean that in these situations a second female parent will have their parental responsibilities and rights recognised without having to either seek a court order or complete a Parental Responsibilities and Rights Agreement with the mother of the child.</p> </td> 
   <td rowspan="1"> <p>1. Scottish Government statistics on Domestic Abuse in Scotland<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[14]</sup></a></p> </td> 
   <td> <p>2. There is no information available on the number of contact and residence cases involving same sex couples as <acronym title="Scottish Courts and Tribunals Service">SCTS</acronym> and <acronym title="Scottish Legal Aid Board">SLAB</acronym> do not record this data. No further information was forthcoming during the consultation process.</p> </td> 
  </tr> 
  <tr> 
   <th class="lAlign"> <p><strong>Race</strong></p> </th> 
   <td> <p><strong>Conferral of</strong><strong><acronym> PRRs</acronym></strong></p> <p>1. The provisions in the Bill giving the Scottish Ministers the power to make regulations in relation to the conferral of <acronym title="Parental Responsibilities and Rights">PRRs</acronym> on second female parents and unmarried fathers where a child's birth is registered overseas may have an impact on different races.</p> <p>2. <acronym title="National Records of Scotland">NRS</acronym> statistics suggest that in 2017 the highest <acronym title="European Union">EU</acronym> countries for non-Scottish born residents were:<br> Poland – 74,000<br> Republic of Ireland – 24,000 Germany – 23,000<br> France – 13,000<br> Latvia – 12,000</p> <p>3. <acronym title="National Records of Scotland">NRS</acronym> statistics suggest that in 2017 the highest non-<acronym title="European Union">EU</acronym> countries for non-Scottish born residents were:<br> India – 27,000<br> Pakistan – 22,000<br> Nigeria – 15,000<br> China – 14,000<br> <acronym title="United States of America">USA</acronym> – 14,000</p> </td> 
   <td> <p>2. &amp; 3. Population by country of birth and nationality<a href="/publications/equality-impact-assessment-record-children-scotland-bill/pages/7/"><sup>[15]</sup></a></p> </td> 
   <td> <p><acronym title="Scottish Courts and Tribunals Service">SCTS</acronym> and <acronym title="Scottish Legal Aid Board">SLAB</acronym> do not hold information on use of interpreters or the race of parties applying to court.</p> </td> 
  </tr> 
  <tr> 
   <th class="lAlign"> <p><strong>Religion or</strong><strong> Belief</strong></p> </th> 
   <td> <p>1. Four contact centres that are members of the Relationships Scotland network use religious establishments as a venue for facilitating contact.</p> <p>2. There is occasional use of church facilities to host Children's Hearings in remote islands.</p> </td> 
   <td> </td> 
   <td> </td> 
  </tr> 
  <tr> 
   <th class="lAlign"> <p><strong>Marriage and</strong><strong> Civil Partnership</strong></p> <p>(the Scottish Government does not require assessment against this protected characteristic unless the policy or practice relates to work, for example <acronym title="Human Resources">HR</acronym> policies and practices)</p> </th> 
   <td> <p>N/A</p> </td> 
   <td> </td> 
   <td> </td> 
  </tr> 
 </tbody>
</table>

<table class="boxy"> 
<thead>
  <tr> 
   <th class="lAlign"> <strong>Age</strong> </th> 
   <th class="cAlign"> <strong>Positive</strong> </th> 
   <th class="cAlign"> <strong>Negative</strong> </th> 
   <th class="cAlign"> <strong>None</strong> </th> 
   <th class="cAlign"> <strong>Reasons for your</strong><strong> decision</strong> </th> 
  </tr> 
  </thead>
 <tbody>
  <tr> 
   <th class="lAlign"> Eliminating unlawful discrimination, harassment and victimisation </th> 
   <td> </td> 
   <td> </td> 
   <td> X </td> 
   <td> Bill is not designed for this. </td> 
  </tr> 
  <tr> 
   <th class="lAlign"> Advancing equality of opportunity </th> 
   <td> X </td> 
   <td> </td> 
   <td> </td> 
   <td> The provision in the Bill removing the presumption that a child aged 12 or over is considered mature enough to give their views is aimed at ensuring that the views of younger children are heard. </td> 
  </tr> 
  <tr> 
   <th class="lAlign"> Promoting good relations among and between different age groups </th> 
   <td> X </td> 
   <td> </td> 
   <td> </td> 
   <td> <p>The Bill introduces factors that the court must consider when making an order under section 11 of the 1995 Act. One of the factors to be considered is the likely effect of the proposed order on the child's relationships with other people important to the child. This is likely to include grandparents. In addition, another factor to be considered is the effect the order might have on the involvement of the child's parents in the child's upbringing. This is likely to have an effect on encouraging good relations between children and adults. </p> <p> The Bill regulates child contact centres. This will have an impact on promoting relations between different age groups as contact centres are used by adults and children to maintain contact. Ensuring contact takes place in a safe and secure environment could help promote relations.</p> </td> 
  </tr> 
 </tbody>
</table>





<script>
const boxyTables = document.querySelectorAll('.boxy');

for (let i = 0, il = boxyTables.length; i < il; i++) {
    const trs = boxyTables[i].querySelectorAll('tr');
    let headerRow;

    if ([].slice.call(trs[0].cells).filter(cell => cell.tagName === 'TH').length === trs[0].cells.length) {
        headerRow = trs[0];
    }

    if (headerRow) {
        for (let i = 1, il = trs.length; i < il; i++) {
            [].slice.call(trs[i].cells).forEach(function (td, index) {
                td.setAttribute('data-heading', headerRow.cells[index].innerText)
            })
        }
    }
}


</script>
