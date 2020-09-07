import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import config from '../config';
import Swal from 'sweetalert2'

class MapArea extends React.Component {
	constructor(props) {
		super(props)
    this.state = {
				coords: [
					{
			      "region": "1",
			      "zipcodes": "M9V|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "427,241,449,242,468,245,460,252,465,263,473,272,479,282,487,286,494,286,492,295,487,305,475,306,467,287,459,291,451,295,440,299,431,297"
			    },
			    {
			      "region": "2",
			      "zipcodes": "M9W|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "394,238,403,390,423,384,441,365,458,351,474,341,489,336,492,323,499,311,487,304,475,305,468,293,459,291,452,298,430,299,428,258,427,244"
			    },
			    {
			      "region": "3",
			      "zipcodes": "M9C|M9B|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "376,417,406,399,424,390,452,390,462,390,462,457,439,467,430,472,428,491,411,499,407,484,411,469,420,465,398,456,398,441,392,424"
			    },
			    {
			      "region": "4",
			      "zipcodes": "M9R|M9P|M9A|M8X|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "459,456,472,448,493,448,515,457,501,448,504,439,500,427,499,415,511,400,511,386,511,376,498,360,492,349,487,336,467,340,454,352,439,364,427,380,403,388,403,393,421,392,445,389,460,389,458,416,458,455"
			    },
			    {
			      "region": "5",
			      "zipcodes": "M8Z|M8Y|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "451,515,477,508,499,500,515,491,523,489,516,476,510,466,512,456,500,451,481,447,466,451,454,459,440,465,432,471,426,476,428,491,442,490,451,495,450,505"
			    },
			    {
			      "region": "6",
			      "zipcodes": "M8W|M8V|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "418,539,426,535,432,536,440,536,450,541,455,544,461,539,471,538,480,534,492,526,497,517,501,509,507,510,503,517,510,515,523,506,518,499,524,492,508,495,481,508,452,517,450,501,449,491,430,491,417,495,412,504,414,514,415,523"
			    },
			    {
			      "region": "7",
			      "zipcodes": "M9L|M9M|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "527,248,524,259,520,279,517,297,512,321,513,335,492,336,491,325,499,315,491,301,492,286,481,283,467,265,461,251,469,246"
			    },
			    {
			      "region": "8",
			      "zipcodes": "M3N|M3J|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "515,306,535,307,537,294,550,295,555,299,553,306,569,308,573,297,584,292,596,310,599,284,611,250,523,246,523,279"
			    },
			    {
			      "region": "9",
			      "zipcodes": "M3L|M3M|M3K|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "515,335,534,341,549,345,571,347,590,344,598,313,586,295,574,295,570,308,555,307,551,295,536,294,537,307,516,310"
			    },
			    {
			      "region": "10",
			      "zipcodes": "M3H|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "590,349,615,346,638,337,654,331,646,326,635,311,623,289,607,272,615,268,612,257,610,249,603,264,601,288,594,324,592,341"
			    },
			    {
			      "region": "11",
			      "zipcodes": "M6N|M6P|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "567,437,564,425,565,413,551,410,531,395,509,395,506,404,499,416,498,426,515,424,527,428,529,443,530,459,569,460"
			    },
			    {
			      "region": "12",
			      "zipcodes": "M9N|M6M|M6L|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "490,335,510,334,527,341,547,345,570,346,572,360,564,377,563,397,564,412,549,413,535,398,523,397,511,395,511,375,500,362,491,349"
			    },
			    {
			      "region": "13",
			      "zipcodes": "M6S|M4R|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "528,491,548,493,550,486,557,489,568,491,569,471,567,460,551,459,528,459,529,439,527,429,512,424,499,425,505,438,502,451,511,454,508,463,517,475,521,486"
			    },
			    {
			      "region": "14",
			      "zipcodes": "M6K|M6J|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "549,482,550,490,563,503,573,508,582,512,591,512,597,510,599,500,611,496,609,482,597,475,581,474,568,475,569,489,559,488"
			    },
			    {
			      "region": "15",
			      "zipcodes": "M6B|M6C|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "565,391,590,394,614,394,621,348,606,346,591,344,570,342,574,360,567,375"
			    },
			    {
			      "region": "16",
			      "zipcodes": "M5M|M5N|M4R|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "619,404,647,404,654,376,658,349,654,334,652,332,639,338,623,346,619,360,615,392"
			    },
			    {
			      "region": "17",
			      "zipcodes": "M6E|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "567,431,591,430,591,409,592,403,587,402,583,394,567,394,563,409,563,423"
			    },
			    {
			      "region": "18",
			      "zipcodes": "M6H|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "571,472,590,473,591,453,593,439,589,429,567,429,571,441,568,458"
			    },
			    {
			      "region": "19",
			      "zipcodes": "M5G|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "611,477,613,447,614,434,591,429,594,441,592,453,591,471"
			    },
			    {
			      "region": "20",
			      "zipcodes": "M5R|M5S|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "614,476,639,480,639,461,641,455,643,445,635,448,622,445,622,429,611,428,612,448,611,466"
			    },
			    {
			      "region": "21",
			      "zipcodes": "M6C|M5P|M4V|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "588,394,615,395,616,401,647,404,644,420,643,444,624,445,624,430,592,429,592,415,594,401"
			    },
			    {
			      "region": "22",
			      "zipcodes": "M4P|M4S|M4T|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "643,444,668,438,667,429,676,428,675,404,675,388,650,385,649,401,644,430,667,429"
			    },
			    {
			      "region": "23",
			      "zipcodes": "M2R|M2N|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "655,330,672,322,693,316,694,295,694,282,647,280,649,265,651,250,609,249,609,255,616,263,610,274,619,282,629,301,639,316,648,326"
			    },
			    {
			      "region": "24",
			      "zipcodes": "M2M|M2H|M2K|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "652,250,769,251,770,293,760,285,718,285,717,295,717,307,717,316,702,318,694,316,695,301,696,283,648,281,650,267"
			    },
			    {
			      "region": "25",
			      "zipcodes": "M2L|M2P|M4N|M3B|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "682,375,706,373,737,378,733,356,731,332,724,321,703,316,680,318,660,325,655,334,659,355,653,370,650,387,681,388"
			    },
			    {
			      "region": "26",
			      "zipcodes": "M4G|M4H|M3C|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "680,379,692,373,738,379,743,393,740,410,737,422,733,427,711,434,698,431,683,435,675,451,671,467,666,467,669,451,671,439,664,428,675,429,678,411,679,389"
			    },
			    {
			      "region": "27",
			      "zipcodes": "M4W|M4Y |M4X|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "641,478,669,478,670,461,668,453,670,443,671,443,645,444,639,466"
			    },
			    {
			      "region": "28",
			      "zipcodes": "M5A|M5C|M5E|M5B|M5G|M5X|M5K|M5L|M5W|M5T|M5V",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "598,513,606,518,598,523,604,535,610,547,607,554,622,558,646,549,657,545,663,535,662,515,671,510,670,493,670,480,650,478,629,476,612,476,610,495,597,499"
			    },
			    {
			      "region": "29",
			      "zipcodes": "M4K|M4J|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "671,484,682,482,703,480,722,474,722,458,723,437,711,430,696,431,687,432,681,442,675,455,671,468"
			    },
			    {
			      "region": "30",
			      "zipcodes": "M4M|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "664,514,671,513,672,486,685,481,708,477,710,492,707,513,707,521,695,543,694,553,685,565,671,564,660,571,665,557,672,553,678,545,687,543,692,535,697,525,687,524,679,529,669,535,665,522"
			    },
			    {
			      "region": "31",
			      "zipcodes": "M4B|M4C|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "723,475,744,473,764,470,765,437,763,425,751,419,741,419,735,425,727,428,719,432,723,445,722,461"
			    },
			    {
			      "region": "32",
			      "zipcodes": "M4L|M4E|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "708,477,727,474,751,468,765,470,765,489,763,503,738,505,724,508,723,519,716,513,710,516,708,493"
			    },
			    {
			      "region": "33",
			      "zipcodes": "M2J|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "766,332,767,288,755,284,714,285,713,291,715,299,715,307,715,317,728,323,750,328"
			    },
			    {
			      "region": "34",
			      "zipcodes": "M3A|M4A|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "726,322,748,329,767,337,766,424,755,421,739,416,739,407,743,394,739,377,733,344,731,332"
			    },
			    {
			      "region": "35",
			      "zipcodes": "M1L|M1K|M1J|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "767,405,809,393,833,385,850,384,859,390,871,392,885,396,891,400,882,410,871,412,854,412,839,418,814,440,798,453,782,468,768,468"
			    },
			    {
			      "region": "36",
			      "zipcodes": "M1N|M1M|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "765,471,766,501,782,489,803,474,825,467,841,466,847,457,855,448,872,438,883,428,883,409,867,412,850,412,830,428,803,448,783,468"
			    },
			    {
			      "region": "37",
			      "zipcodes": "M1R|M1P|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "767,332,767,405,806,394,834,382,851,383,849,340,819,338,785,339"
			    },
			    {
			      "region": "38",
			      "zipcodes": "M1H|M1G|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "849,384,860,392,875,393,893,397,904,384,914,372,897,352,888,338,849,337"
			    },
			    {
			      "region": "39",
			      "zipcodes": "M1W|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "771,250,801,249,799,306,767,315"
			    },
			    {
			      "region": "40",
			      "zipcodes": "M1T|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "799,293,811,293,811,337,792,338,779,335,767,331,768,315,799,305"
			    },
			    {
			      "region": "41",
			      "zipcodes": "M1V|M1S|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "800,249,882,252,882,265,881,289,877,306,874,324,872,338,845,339,812,337,811,293,801,292"
			    },
			    {
			      "region": "42",
			      "zipcodes": "M1X|M1B|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "883,252,987,252,987,334,999,348,980,352,964,342,943,337,922,331,890,338,875,337,875,316,883,287,884,268"
			    },
			    {
			      "region": "43",
			      "zipcodes": "M1E|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "909,420,930,411,955,411,969,403,957,377,926,365,925,337,906,334,888,336,896,350,910,365,909,375,898,393,883,409,885,432"
			    },
			    {
			      "region": "44",
			      "zipcodes": "M1C|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "970,402,993,390,1018,375,999,349,983,354,958,338,925,331,924,346,925,366,947,370,959,379"
			    },
			    {
			      "region": "45",
			      "zipcodes": "L6C|L6E|L6B|L3P|L3R|L3S|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "753,58,987,57,987,253,752,247"
			    },
			    {
			      "region": "46",
			      "zipcodes": "L4C|L4S|L4B|L3T|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "639,58,750,58,751,248,639,247"
			    },
			    {
			      "region": "47",
			      "zipcodes": "L4H|L4L|L6A|L4K|L4J|",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "576,248,637,247,638,172,639,96,638,70,608,70,605,57,591,58,590,82,523,81,430,82,429,184,542,184,543,142,591,140,591,163,606,166,606,184,577,183,576,247"
			    },
			    {
			      "region": "48",
			      "zipcodes": "L7A|L7C|L6Z|L6R|L6P|L6S|L6V|L6X|L6Y|L6W|L6T",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "18,269,80,223,76,211,107,188,116,196,231,108,343,250,226,337,237,355,140,429,18,269"
			    },
			    {
			      "region": "49",
			      "zipcodes": "L5N|L5W|L4T|L4Z|L5R|L5V|L5M|L5L|L5C|L5B|L5A|L4Y|L4W|L4X|L5E|L5G}L5H|L5J|L5K",
			      "prefillcolor": null,
			      "fillcolor": null,
			      "coords": "85,477,394,252,404,399,379,417,391,423,399,427,397,454,398,458,419,465,410,469,407,480,408,489,412,501,415,517,418,529,419,547,408,559,389,560,372,574,357,577,362,581,347,595,335,593,327,610,326,627,305,647,273,663,224,606,200,622,84,477"
			    }
				],
				selected: [
					48,
					45
				]
		}
		this.getTipPosition = this.getTipPosition.bind(this)
		this.onClick = this.onClick.bind(this)
	}

	componentDidMount() {
		//you can fetch data from db here
	}
	
	onClick(e){
		const region = e.target.getAttribute('data-region')
		const {coords} = this.state
		const selected = this.state.selected || []
		var index = selected.indexOf(parseInt(region))
		if (index >= 0){
			selected.splice(index, 1);
		}else{
			selected.push(parseInt(region))
		}
		
		var filtered = selected.filter(function (el) {
		  return el != null;
		});
		
		this.setState({
			selected: filtered
		}, () => {
				//submit selected
				let zipcodes = ''
				
				coords.map((cord, key) => {
					if (selected.includes(parseInt(cord.region))){
						zipcodes += cord.zipcodes
					}
				})			
				
				const data = {
					regions: selected,
					zipcodes: zipcodes
				}
				//this data is ready to submit to save to db
				console.log('datad', data)
		})
	}
	
	getTipPosition(area) {
	    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
	}
	
	render() {

		const {coords, selected} = this.state
		
		const areas = coords && coords.length === 0 ? [] : coords.map((cord, key) => {
				const c = cord.coords.split(',')
				const cor = c && c.length ===  0 ? [] : c.map((cor, key) => {
					return parseInt(cor)
				})

				let isActive = selected.includes(parseInt(cord.region)) ? 'active' : ''
				return <polygon key={key} data-region={cord.region} className={`polygon ${isActive}`} points={cor} onClick={this.onClick} />
		})

		return (
			<>
			<div className="container">
			<svg id="ImageMapper" width="100%" height="auto"
			     viewBox="0 0 1024 678" version="1.1"
			     xmlns="http://www.w3.org/2000/svg">
					 <style>
					 	{ `.polygon { pointer-events: all; fill: none; cursor: pointer; stroke: #000; stroke-width: 2 }` }
						{ `.polygon:hover, .polygon.active { opacity: 0.6; fill: #000 }` }
						{ `.image { pointer-events: none }` }
					 </style>					 
					 <image className="image" style={{pointerEvents: 'none'}} xlinkHref={config.MAP_URL} x="0" y="0" width="100%" height="100%" clipPath="url(#ImageMapper)"/>
			    {areas}
			</svg>
			</div>
		</>
		)
	}
}
export default MapArea;
