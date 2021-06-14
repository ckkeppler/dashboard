class DataPoint {
    name: string;
    value: string;
}

class DataModel {
  name: string;
  lat?: string;
  lng?: string;
  ["score$arithmetic"]?: string;
  ["score$median"]?: string;
  ["score$geometric"]?: string;
  ["PM|Average fine particule matter concentrations (PM 2.5)"]?: string;
  ["Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)"]?: string;
  ["Assult|Sexual assault (rate per 100,000 population)"]?: string;
  ["House Need|Proportion of households in core housing need"]?: string;
  ["Affected|Total Affected"]?: string;
  ["Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population."]?: string;
  ["Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)"]?: string;
  ["Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)"]?: string;
  ["Transit|Percentage of population less than 500 metres from public transit access point. "]?: string;
  ["Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically "]?: string;
  ["Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities "]?: string;
}

class Data {
  static getSyncData(): DataModel[] {
    return [
      {
          "name": "St. John's",
          "lat": "47.5615",
          "lng": "-52.7126",
          "score$arithmetic": "0.53",
          "score$median": "0.55",
          "score$geometric": "0.5",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.196",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.549820379",
          "Assult|Sexual assault (rate per 100,000 population)": "0.3375",
          "House Need|Proportion of households in core housing need": "0.99885",
          "Affected|Total Affected": "0.967883133",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.735821209",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.980259785",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.978409898",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.401",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.75",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Halifax",
          "lat": "44.6488",
          "lng": "-63.5752",
          "score$arithmetic": "0.39",
          "score$median": "0.29",
          "score$geometric": "0",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.2",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.536434783",
          "Assult|Sexual assault (rate per 100,000 population)": "0",
          "House Need|Proportion of households in core housing need": "0.99863",
          "Affected|Total Affected": "0.758780432",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.001327723",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.991863667",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.991563022",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.291",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.75",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Quebec City",
          "lat": "46.8139",
          "lng": "-71.208",
          "score$arithmetic": "0.5",
          "score$median": "0.65",
          "score$geometric": "0.46",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.072",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.655235282",
          "Assult|Sexual assault (rate per 100,000 population)": "0.4288",
          "House Need|Proportion of households in core housing need": "0.99928",
          "Affected|Total Affected": "0.849684887",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.67901811",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.992612202",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.992181355",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.169",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.65",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Sherbrooke",
          "lat": "45.4042",
          "lng": "-71.8929",
          "score$arithmetic": "0.47",
          "score$median": "0.39",
          "score$geometric": "0.41",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.2",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.387392585",
          "Assult|Sexual assault (rate per 100,000 population)": "0.2546",
          "House Need|Proportion of households in core housing need": "0.99928",
          "Affected|Total Affected": "0.946702839",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.568067252",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.998054561",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.997941172",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.236",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.4",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Montreal",
          "lat": "45.5017",
          "lng": "-73.5673",
          "score$arithmetic": "0.44",
          "score$median": "0.36",
          "score$geometric": "0.37",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.116",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.645690609",
          "Assult|Sexual assault (rate per 100,000 population)": "0.3645",
          "House Need|Proportion of households in core housing need": "0.99891",
          "Affected|Total Affected": "0.199575696",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.667936388",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.962036346",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.959823367",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.084",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.65",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Toronto",
          "lat": "43.6532",
          "lng": "-79.3832",
          "score$arithmetic": "0.41",
          "score$median": "0.4",
          "score$geometric": "0.29",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.12",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.979448204",
          "Assult|Sexual assault (rate per 100,000 population)": "0.4039",
          "House Need|Proportion of households in core housing need": "0.99809",
          "Affected|Total Affected": "0.035948184",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.724516178",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.472314916",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.447432205",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.07",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.85",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Hamilton",
          "lat": "43.2557",
          "lng": "-79.8711",
          "score$arithmetic": "0.52",
          "score$median": "0.69",
          "score$geometric": "0.45",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.088",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.688080807",
          "Assult|Sexual assault (rate per 100,000 population)": "0.153",
          "House Need|Proportion of households in core housing need": "0.9987",
          "Affected|Total Affected": "0.914932794",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.810179056",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.992682509",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.992337456",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.189",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.95",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "St. Catharines, Niagara",
          "lat": "43.1594",
          "lng": "-79.2469",
          "score$arithmetic": "0.48",
          "score$median": "0.24",
          "score$geometric": "0.42",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.124",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.227583306",
          "Assult|Sexual assault (rate per 100,000 population)": "0.2423",
          "House Need|Proportion of households in core housing need": "0.99861",
          "Affected|Total Affected": "0.954073194",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.811449338",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.99605296",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.995866839",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.191",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.7",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Kitchener, Cambridge, Waterloo",
          "lat": "43.4758",
          "lng": "-80.5438",
          "score$arithmetic": "0.53",
          "score$median": "0.8",
          "score$geometric": "0.44",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.108",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.938148814",
          "Assult|Sexual assault (rate per 100,000 population)": "0.1522",
          "House Need|Proportion of households in core housing need": "0.99886",
          "Affected|Total Affected": "0.940800328",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.809236346",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.99492853",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.994689387",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.138",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.8",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "London",
          "lat": "42.9849",
          "lng": "-81.2453",
          "score$arithmetic": "0.52",
          "score$median": "0.73",
          "score$geometric": "0.46",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.128",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.726802178",
          "Assult|Sexual assault (rate per 100,000 population)": "0.1831",
          "House Need|Proportion of households in core housing need": "0.99861",
          "Affected|Total Affected": "0.944031391",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.810670649",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.995194437",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.994967834",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.223",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.8",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Windsor",
          "lat": "42.3149",
          "lng": "-83.0364",
          "score$arithmetic": "0.49",
          "score$median": "0.34",
          "score$geometric": "0.45",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.068",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.257336486",
          "Assult|Sexual assault (rate per 100,000 population)": "0.3367",
          "House Need|Proportion of households in core housing need": "0.99883",
          "Affected|Total Affected": "0.952197311",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.760449643",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.996747006",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.996593613",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.329",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.65",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Winnipeg",
          "lat": "49.8951",
          "lng": "-97.1384",
          "score$arithmetic": "0.47",
          "score$median": "0.61",
          "score$geometric": "0.31",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.168",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.731442514",
          "Assult|Sexual assault (rate per 100,000 population)": "0.0082",
          "House Need|Proportion of households in core housing need": "0.99879",
          "Affected|Total Affected": "0.98678976",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.970952269",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.617834473",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.605963669",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.118",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.8",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Regina",
          "lat": "50.4452",
          "lng": "-104.6189",
          "score$arithmetic": "0.49",
          "score$median": "0.45",
          "score$geometric": "0.4",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.076",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.69016505",
          "Assult|Sexual assault (rate per 100,000 population)": "0.1563",
          "House Need|Proportion of households in core housing need": "0.99867",
          "Affected|Total Affected": "0.993824603",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.954289297",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.975137073",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.972506065",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.096",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.45",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Saskatoon",
          "lat": "52.1579",
          "lng": "-106.6702",
          "score$arithmetic": "0.52",
          "score$median": "0.75",
          "score$geometric": "0",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.128",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.789715092",
          "Assult|Sexual assault (rate per 100,000 population)": "0",
          "House Need|Proportion of households in core housing need": "0.99882",
          "Affected|Total Affected": "0.999728535",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.998381243",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.966749603",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.963441872",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.174",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.75",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Calgary",
          "lat": "51.0447",
          "lng": "-114.0719",
          "score$arithmetic": "0.45",
          "score$median": "0.2",
          "score$geometric": "0.35",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.192",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "1.029322572",
          "Assult|Sexual assault (rate per 100,000 population)": "0.2922",
          "House Need|Proportion of households in core housing need": "0.99887",
          "Affected|Total Affected": "0.969706496",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.961480235",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.204076288",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.146420409",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.111",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.8",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Edmonton",
          "lat": "53.5461",
          "lng": "-113.4938",
          "score$arithmetic": "0.53",
          "score$median": "0.65",
          "score$geometric": "0.45",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.144",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.878202354",
          "Assult|Sexual assault (rate per 100,000 population)": "0.1443",
          "House Need|Proportion of households in core housing need": "0.99877",
          "Affected|Total Affected": "0.999265422",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.999016644",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.995613356",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.995336765",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.173",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.65",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Vancouver",
          "lat": "49.2827",
          "lng": "-123.1207",
          "score$arithmetic": "0.49",
          "score$median": "0.48",
          "score$geometric": "0.42",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.22",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "1.01814951",
          "Assult|Sexual assault (rate per 100,000 population)": "0.4772",
          "House Need|Proportion of households in core housing need": "0.99824",
          "Affected|Total Affected": "0.464536408",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.631343497",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.839610176",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.829440932",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.073",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.8",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": "Victoria",
          "lat": "48.4284",
          "lng": "-123.3656",
          "score$arithmetic": "0.54",
          "score$median": "0.8",
          "score$geometric": "0.46",
          "PM|Average fine particule matter concentrations (PM 2.5)": "1.228",
          "Consumption|Ratio of land consumption rate to population growth rate (1971 to 2011)": "0.945180333",
          "Assult|Sexual assault (rate per 100,000 population)": "0.2873",
          "House Need|Proportion of households in core housing need": "0.99858",
          "Affected|Total Affected": "0.967908252",
          "Disaster|Number of people who died, went missing or were directly affected by disasters per 100,000 population.": "0.851876173",
          "Econ Loss1|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Canadian Disaster Database)": "0.987398785",
          "Econ Loss2|Direct economic loss: the monetary value of total or partial destruction of physical assets existing in the affected area. Direct economic loss is nearly equivalent to physical damage (based on the Inflation Calculator)": "0.987105407",
          "Transit|Percentage of population less than 500 metres from public transit access point. ": "0.096",
          "Civility|Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically ": "0.8",
          "Waste|Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated by cities ": "0.01"
      },
      {
          "name": ""
      }
  ]
  }
}