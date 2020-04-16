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

tr > * {
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

    .boxy tr > * {
        display: block
    }

    .boxy tr > * {
        display: flex;
        border: 1px solid #ccc;
    }

    .boxy tr > td:not(:last-child) {
        border-bottom-color: #ebebeb;
    }

    .boxy tr > th:last-child {
        border-width: 0;
        margin-top: 28px;
    }

    .boxy tr > td:not(:first-child) {
        border-top-width: 0;
    }

    .boxy tr > td::before {
        content: attr(data-heading);
        display: block;
        font-weight: bold;
        width: calc(50% - 15px);
        margin-right: 15px;
    }

    .boxy tr > td:first-child {
        box-shadow: inset 0 4px 0 #ebebeb;
        padding-top: 11px
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

<script>
const trs = document.querySelectorAll('.boxy tr');

let headerRow;

if ([].slice.call(trs[0].cells).filter(cell => cell.tagName === 'TH').length === trs[0].cells.length) {
    headerRow = trs[0];
}

if (headerRow) {
    for (let i = 1, il = trs.length; i < il; i++) {
        [].slice.call(trs[i].cells).forEach(function (td, index) {
            console.log(td)
            td.setAttribute('data-heading', headerRow.cells[index].innerText)
        })
    }
}
</script>
