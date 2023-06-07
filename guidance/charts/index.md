---
layout: component
metatitle: "Data visualisation: charts guidance"
title: "Data visualisation: charts"
category: guidance
parent: guidance
thispage: guidance.charts
summary: "How to use charts to present numerical data in an accessible way."
permalink: '/guidance/charts/'

updatehistory:
  - date: 2023-06-07
    content: First published
    homepage: 'Added guidance on <a href="/guidance/charts/">creating accessible charts</a>'
    url: /guidance/charts/
---

## Choosing a chart

There are many different types of chart. Choosing which one to use will depend on the:

- message conveyed
- statistical relationships within the data
- target audience

This table gives examples of different statistical relationships. It suggests the type of chart that would work best for each of these.

<table class="ds_table" data-smallscreen="scrolling">
    <caption>Recommended chart types by statistical relationship. Source: Government Analysis Function</caption>
    <thead>
        <tr>
            <th scope="col">Relationship</th>
            <th scope="col">Example</th>
            <th scope="col">Recommended chart types</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Distribution</td>
            <td>Population by age</td>
            <td>Bar chart, <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/articles/ukpopulationpyramidinteractive/2020-01-08">population pyramid</a>, <a href="https://en.wikipedia.org/wiki/Box_plot">box plot</a>, <a href="https://en.wikipedia.org/wiki/Dot_plot_%28statistics%29">dot plot</a></td>
        </tr>
        <tr>
            <td>Time series</td>
            <td>Price inflation over time</td>
            <td>Line chart, <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/articles/howpopularisyourbirthday/2015-12-18">calendar heat map</a></td>
        </tr>
        <tr>
            <td>Ranking</td>
            <td>Schools ranked by performance</td>
            <td>Bar chart, <a href="https://en.wikipedia.org/wiki/Lollipop_graph">lollipop chart</a>, <a href="https://towardsdatascience.com/slope-charts-why-how-11c2a0bc28be">slope chart</a></td>
        </tr>
        <tr>
            <td>Deviation</td>
            <td>Rail company performance compared with target</td>
            <td>Bar chart, dot plot</td>
        </tr>
        <tr>
            <td>Correlation</td>
            <td>Relationship between weight and height</td>
            <td><a href="https://en.wikipedia.org/wiki/Scatter_plot">Scatterplot</a>, line graph</td>
        </tr>
        <tr>
            <td>Magnitude</td>
            <td>Average income by region</td>
            <td>Bar chart</td>
        </tr>
        <tr>
            <td>Spatial</td>
            <td>Geographical clusters of notifiable diseases</td>
            <td>Map</td>
        </tr>
        <tr>
            <td>Part-to-whole</td>
            <td>Total economic production by industrial sector</td>
            <td>Pie chart, donut chart, <a href="https://www.data-to-viz.com/graph/treemap.html">tree map</a>, <a href="https://en.wikipedia.org/wiki/Bubble_chart">bubble chart</a></td>
        </tr>
        <tr>
            <td>Flow</td>
            <td>Trade between countries</td>
            <td><a href="https://en.wikipedia.org/wiki/Sankey_diagram">Sankey graph</a></td>
        </tr>
    </tbody>
</table>

The Government Analysis Function gives best practice guidance on [using different chart types for data visualisation](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/).

## Accessibility

The Scottish Government is committed to making its websites accessible. The Digital Scotland Design System meets the [Web Content Accessibility Guidelines version 2.1](https://www.w3.org/TR/WCAG21/) (WCAG) A and AA success criteria. Any charts used with the Design System must meet these guidelines too.

The Government Analysis Function provides further information on [creating accessible charts](https://analysisfunction.civilservice.gov.uk/policy-store/making-analytical-publications-accessible/).

## Colour 

Do not use colour alone to convey information. Avoid using legends for line charts or pie charts. Instead, use text labels to identify lines or segments. Some visually impaired users may be unable to tell the difference between colours.

Use colour carefully and be consistent. Use colours that are logical for the context. For example, on a chart plotting fruits, avoid using the colour orange to represent apples.

Colours can have particular associations or meanings for the user that could make the chart unclear. For example, red often means warning.

To meet accessibility guidelines, adjacent colours in charts must have a contrast ratio of 3 to 1. Only use a different ratio if it helps make the content easier to understand. Any text on a chart must have a contrast ratio of 4.5 to 1 with the background colour, unless the text is larger than size 18 (or size 14 with bold weighting). 

We are currently in the process of designing specific colour palettes to use for charts. In the meantime, follow the [chart colour guidance and example palettes](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/) published by the Government Analysis Function.

## Publishing charts

Charts within an article should match the column width of the surrounding text.

### Using HTML or an image

You should use HTML for charts if it meets accessibility guidelines.

Interactive charts often use JavaScript to add functionality. The software that creates these charts might not support accessibility. You should check that generated charts meet accessibility guidelines.

If your only option is to publish a chart as an image, then use the Scalable Vector Graphic (SVG) file format. You should use the SVG format over bitmap file types like PNG and JPEG. The SVG format has the advantage of being able to scale to different sizes without losing clarity. This makes it more suitable for use on different devices.

### Chart text

Give each chart a title that describes the main message it presents. Use an HTML heading element at the right heading level for the surrounding content hierarchy.

Include text labels and annotations as part of the image – they’re essential parts of a chart and will therefore still meet accessibility guidelines. Use the largest font size you can as text may appear smaller on different devices.

### Give alternative content

Not all users will be able to read or understand a chart. Give alternative versions of the data and explain the meaning of the chart. This will help make it accessible. 

For simple image charts, use alternative text to describe what the image depicts. This will help users of screen readers understand the chart.

Complex charts may need more information. Some users might not understand a chart by its name only or through a brief description. You should supplement the chart with:

- an HTML table of the data (large HTML tables can be difficult to navigate)
- a more detailed text description that explains the chart’s key messages
- both of the above, if appropriate

For complex charts with large data sets, give the data in a downloadable format like an Excel spreadsheet.

If providing separate downloadable image versions of a chart, include the title as part of this image. This will ensure the title is not lost when the chart is downloaded, shared, or edited.