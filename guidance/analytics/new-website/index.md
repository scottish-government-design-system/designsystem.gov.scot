---
layout: component
title:  "Setting up any analytics tool for a new website"
category: guidance
parent: guidance.analytics
thispage: guidance.analytics.new-website
noindex: true
---

<table class="ds_table">
<thead>
<tr>
<th>Action</th>
<th>Role</th></tr>
</thead>
<tbody>
<tr>
<td>Define Key Performance Indicators/Metrics needed for the site. Identify stakeholders requiring access to data</td>
<td>Product Owner</td>
</tr>
<tr>
<td>Ensure Privacy Impact Assessment covers usage of analytics data</td>
<td>Information Governance</td>
</tr>
<tr>
<td>Set up and generate analytics or tag manager codes (normally this is different environment codes for test and live)</td>
<td>Performance Analyst</td>
</tr>
<tr>
<td>Add tag manager or analytics code to test site</td>
<td>Front End Developer</td>
</tr>
<tr>
<td>Add cookie banner to site, ensuring analytics respects user opt-in/opt-outs</td>
<td>Front End Developer</td>
</tr>
<tr>
<td>Test that tag manager is sending analytics data by testing pageview on test site</td>
<td>Performance Analyst</td>
</tr>
<tr>
<td>Set up and test other tags to collect event data relevant for KPIs on test site</td>
<td>Front End Developer, Performance Analyst and Tester</td>
</tr>
<tr>
<td>Confirm URLs /Page Titles are not collecting any special category data under GDPR</td>
<td>Information Governance</td>
</tr>
<tr>
<td>Create prototype dashboard using test site</td>
<td>Performance Analyst</td>
</tr>
<tr>
<td>Check dashboard meets requirements of stakeholders</td>
<td>Performance Analyst and Product Owner</td>
</tr>
<tr>
<td>Add tag manager code to live site</td>
<td>Front End Developer</td>
</tr>
<tr>
<td>Push tags from test tag container to live</td>
<td>Performance Analyst</td>
</tr>
<tr>
<td>Create live dashboard and administer access to stakeholders</td>
<td>Performance Analyst</td>
</tr>
</tbody>
</table>
