---
layout: example
type: example
index: 0
---

<h1>Design system tables</h1>

<style>
.pl-columns {
	max-width: 100%
}

.pl-columns::before {
	content: 'mobile full width';
	border: 1px solid #ccc;
	padding: 10px;
	display: inline-block;
}

@media screen and (min-width: 768px) {
.pl-columns {
	max-width: 458px
}
.pl-columns::before {
	content: 'tablet 8 columns'
}
}

@media screen and (min-width: 992px) {
.pl-columns {
	max-width: 533px
}
.pl-columns::before {
	content: 'desktop 7 columns'
}
}

@media screen and (min-width: 1200px) {
.pl-columns {
	max-width: 649px
}
.pl-columns::before {
	content: 'hd 7 columns'
}
}
</style>
<h2> Tables inside containers matching realistic content widths</h2>
<section class="pl-columns">


<table class="ds_table" data-smallscreen="scrolling">
	<caption>Scrollable table</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th>Height (m)</th>
            <th>Height (ft)</th>
            <th>Region</th>
            <th>County</th>
            <th>Grid reference</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ben Nevis</td>
            <td align="right">1345</td>
            <td align="right">4411</td>
            <td>Fort William to Loch Treig & Loch Leven</td>
            <td>Highland</td>
            <td>NN166712</td>
        </tr>

        <tr>
            <td>Ben Macdui</td>
            <td align="right">1309</td>
            <td align="right">4295</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire/Moray</td>
            <td>NN988989</td>
        </tr>

        <tr>
            <td>Braeriach</td>
            <td align="right">1296</td>
            <td align="right">4252</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire/Highland</td>
            <td>NN953999</td>
        </tr>

        <tr>
            <td>Cairn Toul</td>
            <td align="right">1291</td>
            <td align="right">4236</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire</td>
            <td>NN963972</td>
        </tr>
    </tbody>
</table>

<table class="ds_table" data-smallscreen="boxes">
	<caption>Collapse to boxes</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th>Height (m)</th>
            <th>Height (ft)</th>
            <th>Region</th>
            <th>County</th>
            <th>Grid reference</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ben Nevis</td>
            <td align="right">1345</td>
            <td align="right">4411</td>
            <td>Fort William to Loch Treig & Loch Leven</td>
            <td>Highland</td>
            <td>NN166712</td>
        </tr>

        <tr>
            <td>Ben Macdui</td>
            <td align="right">1309</td>
            <td align="right">4295</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire/Moray</td>
            <td>NN988989</td>
        </tr>

        <tr>
            <td>Braeriach</td>
            <td align="right">1296</td>
            <td align="right">4252</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire/Highland</td>
            <td>NN953999</td>
        </tr>

        <tr>
            <td>Cairn Toul</td>
            <td align="right">1291</td>
            <td align="right">4236</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire</td>
            <td>NN963972</td>
        </tr>
    </tbody>
</table>
</section>

<hr />












<script src="ckeditor.js"></script>
<script src="sample.js"></script>
<div id="foo-editor">

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

<table data-smallscreen="boxes">
    <thead>
        <tr>
            <th>Year</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-heading="Year">2014-15</td>
            <td data-heading="All court types" style="text-align:right">106,584</td>
            <td data-heading="High court" style="text-align:right">594</td>
            <td data-heading="Sheriff solemn" style="text-align:right">594</td>
            <td data-heading="Sheriff summary" style="text-align:right">594</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">594</td>
        </tr>
        <tr>
            <td data-heading="Year">2015-16</td>
            <td data-heading="All court types" style="text-align:right">99,692</td>
            <td data-heading="High court" style="text-align:right">603</td>
            <td data-heading="Sheriff solemn" style="text-align:right">603</td>
            <td data-heading="Sheriff summary" style="text-align:right">603</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">603</td>
        </tr>
        <tr>
            <td data-heading="Year">2016-17</td>
            <td data-heading="All court types" style="text-align:right">92,347</td>
            <td data-heading="High court" style="text-align:right">649</td>
            <td data-heading="Sheriff solemn" style="text-align:right">649</td>
            <td data-heading="Sheriff summary" style="text-align:right">649</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">649</td>
        </tr>
        <tr>
            <td data-heading="Year">2017-18</td>
            <td data-heading="All court types" style="text-align:right">83,179</td>
            <td data-heading="High court" style="text-align:right">598</td>
            <td data-heading="Sheriff solemn" style="text-align:right">598</td>
            <td data-heading="Sheriff summary" style="text-align:right">598</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">598</td>
        </tr>
        <tr>
            <td data-heading="Year">2018-19</td>
            <td data-heading="All court types" style="text-align:right">78,503</td>
            <td data-heading="High court" style="text-align:right">585</td>
            <td data-heading="Sheriff solemn" style="text-align:right">585</td>
            <td data-heading="Sheriff summary" style="text-align:right">585</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">585</td>
        </tr>
    </tbody>
</table>

<h2>Many columns, subheadings, boxes</h2>

<table data-smallscreen="boxes">
    <thead>
        <tr>
            <th>Year</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="6" data-heading="Year">Old</th>
        </tr>
        <tr>
            <td data-heading="Year">2014-15</td>
            <td data-heading="All court types" style="text-align:right">106,584</td>
            <td data-heading="High court" style="text-align:right">594</td>
            <td data-heading="Sheriff solemn" style="text-align:right">594</td>
            <td data-heading="Sheriff summary" style="text-align:right">594</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">594</td>
        </tr>
        <tr>
            <td data-heading="Year">2015-16</td>
            <td data-heading="All court types" style="text-align:right">99,692</td>
            <td data-heading="High court" style="text-align:right">603</td>
            <td data-heading="Sheriff solemn" style="text-align:right">603</td>
            <td data-heading="Sheriff summary" style="text-align:right">603</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">603</td>
        </tr>
        <tr>
            <td data-heading="Year">2016-17</td>
            <td data-heading="All court types" style="text-align:right">92,347</td>
            <td data-heading="High court" style="text-align:right">649</td>
            <td data-heading="Sheriff solemn" style="text-align:right">649</td>
            <td data-heading="Sheriff summary" style="text-align:right">649</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">649</td>
        </tr>
        <tr>
            <th colspan="6" data-heading="Year">Recent</th>
        </tr>
        <tr>
            <td data-heading="Year">2017-18</td>
            <td data-heading="All court types" style="text-align:right">83,179</td>
            <td data-heading="High court" style="text-align:right">598</td>
            <td data-heading="Sheriff solemn" style="text-align:right">598</td>
            <td data-heading="Sheriff summary" style="text-align:right">598</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">598</td>
        </tr>
        <tr>
            <td data-heading="Year">2018-19</td>
            <td data-heading="All court types" style="text-align:right">78,503</td>
            <td data-heading="High court" style="text-align:right">585</td>
            <td data-heading="Sheriff solemn" style="text-align:right">585</td>
            <td data-heading="Sheriff summary" style="text-align:right">585</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">585</td>
        </tr>
    </tbody>
</table>

<h2>Heading cell in first column</h2>

<table>
    <thead>
        <tr>
            <th>&nbsp;</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-heading="">2014-15</th>
            <td data-heading="All court types" style="text-align:right">106,584</td>
            <td data-heading="High court" style="text-align:right">594</td>
            <td data-heading="Sheriff solemn" style="text-align:right">594</td>
            <td data-heading="Sheriff summary" style="text-align:right">594</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">594</td>
        </tr>
        <tr>
            <th data-heading="">2015-16</th>
            <td data-heading="All court types" style="text-align:right">99,692</td>
            <td data-heading="High court" style="text-align:right">603</td>
            <td data-heading="Sheriff solemn" style="text-align:right">603</td>
            <td data-heading="Sheriff summary" style="text-align:right">603</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">603</td>
        </tr>
        <tr>
            <th data-heading="">2016-17</th>
            <td data-heading="All court types" style="text-align:right">92,347</td>
            <td data-heading="High court" style="text-align:right">649</td>
            <td data-heading="Sheriff solemn" style="text-align:right">649</td>
            <td data-heading="Sheriff summary" style="text-align:right">649</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">649</td>
        </tr>
        <tr>
            <th data-heading="">2017-18</th>
            <td data-heading="All court types" style="text-align:right">83,179</td>
            <td data-heading="High court" style="text-align:right">598</td>
            <td data-heading="Sheriff solemn" style="text-align:right">598</td>
            <td data-heading="Sheriff summary" style="text-align:right">598</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">598</td>
        </tr>
        <tr>
            <th data-heading="">2018-19</th>
            <td data-heading="All court types" style="text-align:right">78,503</td>
            <td data-heading="High court" style="text-align:right">585</td>
            <td data-heading="Sheriff solemn" style="text-align:right">585</td>
            <td data-heading="Sheriff summary" style="text-align:right">585</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">585</td>
        </tr>
    </tbody>
</table>

<h2>Scrolling</h2>

<table data-smallscreen="scrolling">
    <thead>
        <tr>
            <th>Year</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
            <th>Year</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-title="">2014-15</td>
            <td style="text-align:right">106,584</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td>2014-15</td>
            <td style="text-align:right">106,584</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
        </tr>
        <tr>
            <td>2015-16</td>
            <td style="text-align:right">99,692</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td>2015-16</td>
            <td style="text-align:right">99,692</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
        </tr>
        <tr>
            <td>2016-17</td>
            <td style="text-align:right">92,347</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td>2016-17</td>
            <td style="text-align:right">92,347</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
        </tr>
        <tr>
            <td>2017-18</td>
            <td style="text-align:right">83,179</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td>2017-18</td>
            <td style="text-align:right">83,179</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
        </tr>
        <tr>
            <td>2018-19</td>
            <td style="text-align:right">78,503</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td>2018-19</td>
            <td style="text-align:right">78,503</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
        </tr>
    </tbody>
</table>


</div>




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

<table data-smallscreen="boxes">
    <thead>
        <tr>
            <th>Year</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-heading="Year">2014-15</td>
            <td data-heading="All court types" style="text-align:right">106,584</td>
            <td data-heading="High court" style="text-align:right">594</td>
            <td data-heading="Sheriff solemn" style="text-align:right">594</td>
            <td data-heading="Sheriff summary" style="text-align:right">594</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">594</td>
        </tr>
        <tr>
            <td data-heading="Year">2015-16</td>
            <td data-heading="All court types" style="text-align:right">99,692</td>
            <td data-heading="High court" style="text-align:right">603</td>
            <td data-heading="Sheriff solemn" style="text-align:right">603</td>
            <td data-heading="Sheriff summary" style="text-align:right">603</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">603</td>
        </tr>
        <tr>
            <td data-heading="Year">2016-17</td>
            <td data-heading="All court types" style="text-align:right">92,347</td>
            <td data-heading="High court" style="text-align:right">649</td>
            <td data-heading="Sheriff solemn" style="text-align:right">649</td>
            <td data-heading="Sheriff summary" style="text-align:right">649</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">649</td>
        </tr>
        <tr>
            <td data-heading="Year">2017-18</td>
            <td data-heading="All court types" style="text-align:right">83,179</td>
            <td data-heading="High court" style="text-align:right">598</td>
            <td data-heading="Sheriff solemn" style="text-align:right">598</td>
            <td data-heading="Sheriff summary" style="text-align:right">598</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">598</td>
        </tr>
        <tr>
            <td data-heading="Year">2018-19</td>
            <td data-heading="All court types" style="text-align:right">78,503</td>
            <td data-heading="High court" style="text-align:right">585</td>
            <td data-heading="Sheriff solemn" style="text-align:right">585</td>
            <td data-heading="Sheriff summary" style="text-align:right">585</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">585</td>
        </tr>
    </tbody>
</table>

<h2>Many columns, subheadings, boxes</h2>

<table data-smallscreen="boxes">
    <thead>
        <tr>
            <th>Year</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="6" data-heading="Year">Old</th>
        </tr>
        <tr>
            <td data-heading="Year">2014-15</td>
            <td data-heading="All court types" style="text-align:right">106,584</td>
            <td data-heading="High court" style="text-align:right">594</td>
            <td data-heading="Sheriff solemn" style="text-align:right">594</td>
            <td data-heading="Sheriff summary" style="text-align:right">594</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">594</td>
        </tr>
        <tr>
            <td data-heading="Year">2015-16</td>
            <td data-heading="All court types" style="text-align:right">99,692</td>
            <td data-heading="High court" style="text-align:right">603</td>
            <td data-heading="Sheriff solemn" style="text-align:right">603</td>
            <td data-heading="Sheriff summary" style="text-align:right">603</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">603</td>
        </tr>
        <tr>
            <td data-heading="Year">2016-17</td>
            <td data-heading="All court types" style="text-align:right">92,347</td>
            <td data-heading="High court" style="text-align:right">649</td>
            <td data-heading="Sheriff solemn" style="text-align:right">649</td>
            <td data-heading="Sheriff summary" style="text-align:right">649</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">649</td>
        </tr>
        <tr>
            <th colspan="6" data-heading="Year">Recent</th>
        </tr>
        <tr>
            <td data-heading="Year">2017-18</td>
            <td data-heading="All court types" style="text-align:right">83,179</td>
            <td data-heading="High court" style="text-align:right">598</td>
            <td data-heading="Sheriff solemn" style="text-align:right">598</td>
            <td data-heading="Sheriff summary" style="text-align:right">598</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">598</td>
        </tr>
        <tr>
            <td data-heading="Year">2018-19</td>
            <td data-heading="All court types" style="text-align:right">78,503</td>
            <td data-heading="High court" style="text-align:right">585</td>
            <td data-heading="Sheriff solemn" style="text-align:right">585</td>
            <td data-heading="Sheriff summary" style="text-align:right">585</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">585</td>
        </tr>
    </tbody>
</table>

<h2>Heading cell in first column</h2>

<table>
    <thead>
        <tr>
            <th>&nbsp;</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th data-heading="">2014-15</th>
            <td data-heading="All court types" style="text-align:right">106,584</td>
            <td data-heading="High court" style="text-align:right">594</td>
            <td data-heading="Sheriff solemn" style="text-align:right">594</td>
            <td data-heading="Sheriff summary" style="text-align:right">594</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">594</td>
        </tr>
        <tr>
            <th data-heading="">2015-16</th>
            <td data-heading="All court types" style="text-align:right">99,692</td>
            <td data-heading="High court" style="text-align:right">603</td>
            <td data-heading="Sheriff solemn" style="text-align:right">603</td>
            <td data-heading="Sheriff summary" style="text-align:right">603</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">603</td>
        </tr>
        <tr>
            <th data-heading="">2016-17</th>
            <td data-heading="All court types" style="text-align:right">92,347</td>
            <td data-heading="High court" style="text-align:right">649</td>
            <td data-heading="Sheriff solemn" style="text-align:right">649</td>
            <td data-heading="Sheriff summary" style="text-align:right">649</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">649</td>
        </tr>
        <tr>
            <th data-heading="">2017-18</th>
            <td data-heading="All court types" style="text-align:right">83,179</td>
            <td data-heading="High court" style="text-align:right">598</td>
            <td data-heading="Sheriff solemn" style="text-align:right">598</td>
            <td data-heading="Sheriff summary" style="text-align:right">598</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">598</td>
        </tr>
        <tr>
            <th data-heading="">2018-19</th>
            <td data-heading="All court types" style="text-align:right">78,503</td>
            <td data-heading="High court" style="text-align:right">585</td>
            <td data-heading="Sheriff solemn" style="text-align:right">585</td>
            <td data-heading="Sheriff summary" style="text-align:right">585</td>
            <td data-heading="Justice of the Peace court" style="text-align:right">585</td>
        </tr>
    </tbody>
</table>

<h2>Scrolling</h2>

<table data-smallscreen="scrolling">
    <thead>
        <tr>
            <th>Year</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
            <th>Year</th>
            <th style="text-align:right">All court types</th>
            <th style="text-align:right">High court</th>
            <th style="text-align:right">Sheriff solemn</th>
            <th style="text-align:right">Sheriff summary</th>
            <th style="text-align:right">Justice of the Peace court</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-title="">2014-15</td>
            <td style="text-align:right">106,584</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td>2014-15</td>
            <td style="text-align:right">106,584</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
            <td style="text-align:right">594</td>
        </tr>
        <tr>
            <td>2015-16</td>
            <td style="text-align:right">99,692</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td>2015-16</td>
            <td style="text-align:right">99,692</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
            <td style="text-align:right">603</td>
        </tr>
        <tr>
            <td>2016-17</td>
            <td style="text-align:right">92,347</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td>2016-17</td>
            <td style="text-align:right">92,347</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
            <td style="text-align:right">649</td>
        </tr>
        <tr>
            <td>2017-18</td>
            <td style="text-align:right">83,179</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td>2017-18</td>
            <td style="text-align:right">83,179</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
            <td style="text-align:right">598</td>
        </tr>
        <tr>
            <td>2018-19</td>
            <td style="text-align:right">78,503</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td>2018-19</td>
            <td style="text-align:right">78,503</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
            <td style="text-align:right">585</td>
        </tr>
    </tbody>
</table>






<script>
const boxyTables = document.querySelectorAll('[data-smallscreen="boxes"]');

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










<script>
    initSample();
</script>
