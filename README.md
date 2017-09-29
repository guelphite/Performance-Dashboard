# Performance Dashboard (The Count)
The Count's purpose was to display online, the key performance metrics of various departments of the City of Guelph. Additional requirements included that it needed to
be AODA compliant and responsive.

## Enviroment
* CMS: Wordpress v4.8.1
* Theme: Guelph2012
* Framework:Bootstrap v3.3.7

The dashboard was built onto a page on Guelph.ca and was not a sub domain. This means it inherits all of guelph.ca's capabilities and custom stylings.

## Technologies

The Count uses the folowing web technologies:
* HTML/CSS
* Javascript
* JQuery
* AJAX
* XML

## Method

Uses two types of pages:
* Dashboard
* Factsheet

The Dashboard is comprised of dashlets, which are divided into categories using tabs.

Each Dashlet is comprised of a metric name, metric value, metric description, metric status icon and status text.

### Dashboard
The dashboard uses AJAX to retrieve an xml file and uses Javascript to display the data in the form of a dashlet.
Each tab has a different xml file for each category.

### Factsheet
The factsheet uses AJAX to retrieve an xml file and using external JQuery, grabs the UID for the metric and displays the corresponding nodes using HTML.
The UID is stored in the xml file and the UID that is retrieved by JQuery is determined by a global variable in the header of the page.


## Authors
* [Matthew Lee](mailto:matthew.lee@guelph.ca)
* Mathew Thomas

## Acknowledgments
* Google material icons
