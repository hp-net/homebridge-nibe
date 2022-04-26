//
// parameters.ts
//
// original author: Sebastian Haesselbarth (seb@sebmail.de)
// modified by Hubert Pruszynski (hubert.pruszynski@gmail.com)
//
// original sources: https://github.com/sebilm/ioBroker.nibeuplink
//
// license: MIT
//
// this version is based on original parameters.ts version 1.1.1
//

export interface Parameter {
    key: string;
    divideBy?: number;
}

export const NibeParameters = new Map<number, Parameter>([
  [
    10001,
    {
      key: "FAN_SPEED",
      divideBy: 0,
    },
  ],
  [
    10002,
    {
      key: "FAN_SPEED",
    },
  ],
  [
    10003,
    {
      key: "FAN_SPEED",
    },
  ],
  [
    10004,
    {
      key: "FAN_SPEED",
    },
  ],
  [
    10005,
    {
      key: "FAN_SPEED",
    },
  ],
  [
    10006,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB100_EP14",
      divideBy: 10,
    },
  ],
  [
    10007,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB100_EP14",
      divideBy: 10,
    },
  ],
  [
    10008,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB100_EP15",
      divideBy: 10,
    },
  ],
  [
    10009,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB100_EP15",
      divideBy: 10,
    },
  ],
  [
    10010,
    {
      key: "TEMPORARY_LUX",
    },
  ],
  [
    10011,
    {
      key: "SELECTED_FAN_SPEED",
    },
  ],
  [
    10012,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10013,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10014,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10015,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10016,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10017,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10018,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10019,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10020,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10021,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10022,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10023,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10024,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10025,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10026,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10027,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10028,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10029,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10030,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10031,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10032,
    {
      key: "BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10033,
    {
      key: "ADDITION_BLOCKED",
      divideBy: 0,
    },
  ],
  [
    10035,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    10036,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    10037,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    10038,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    10039,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    10040,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    10041,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    10042,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    10043,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    10044,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    10045,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    10046,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    10047,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    10048,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    10049,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    10050,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    10051,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    10052,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    10053,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    10054,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    10055,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    10056,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    10057,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    10058,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    10059,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    10060,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    10061,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    10062,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    10063,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    10064,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    10065,
    {
      key: "SEASONAL_OVERVIEW_BRINE_IN_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    10066,
    {
      key: "SEASONAL_OVERVIEW_BRINE_OUT_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    10067,
    {
      key: "SEASONAL_EXHAUST_AIR_BT20",
      divideBy: 10,
    },
  ],
  [
    10068,
    {
      key: "SEASONAL_EXTRACT_AIR_BT21",
      divideBy: 10,
    },
  ],
  [
    10069,
    {
      key: "PRICE_OF_ELECTRICITY_SE4",
    },
  ],
  [
    10070,
    {
      key: "TEMPORARY_LUX",
    },
  ],
  [
    10071,
    {
      key: "SELECTED_FAN_SPEED",
    },
  ],
  [
    10072,
    {
      key: "ACTUAL_HOT_WATER_TYPE",
    },
  ],
  [
    10073,
    {
      key: "STATUS",
    },
  ],
  [
    10074,
    {
      key: "FAN_EFFECT",
    },
  ],
  [
    40001,
    {
      key: "OUTDOOR_TEMP",
      divideBy: 10,
    },
  ],
  [
    40002,
    {
      key: "OUTDOOR_TEMP",
      divideBy: 10,
    },
  ],
  [
    40003,
    {
      key: "OUTDOOR_TEMP",
      divideBy: 10,
    },
  ],
  [
    40004,
    {
      key: "OUTDOOR_TEMP_BT1",
      divideBy: 10,
    },
  ],
  [
    40005,
    {
      key: "HEAT_MEDIUM_FLOW_EP23_BT2",
      divideBy: 10,
    },
  ],
  [
    40006,
    {
      key: "HEAT_MEDIUM_FLOW_EP22_BT2",
      divideBy: 10,
    },
  ],
  [
    40007,
    {
      key: "HEAT_MEDIUM_FLOW_EP21_BT2",
      divideBy: 10,
    },
  ],
  [
    40008,
    {
      key: "HEAT_MEDIUM_FLOW_BT2",
      divideBy: 10,
    },
  ],
  [
    40009,
    {
      key: "RETURN_TEMP_EB23_BT3",
      divideBy: 10,
    },
  ],
  [
    40010,
    {
      key: "RETURN_TEMP_EB22_BT3",
      divideBy: 10,
    },
  ],
  [
    40011,
    {
      key: "RETURN_TEMP_EB100_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    40012,
    {
      key: "RETURN_TEMP_EB100_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    40013,
    {
      key: "HOT_WATER_TOP_BT7",
      divideBy: 10,
    },
  ],
  [
    40014,
    {
      key: "HOT_WATER_CHARGING_BT6",
      divideBy: 10,
    },
  ],
  [
    40015,
    {
      key: "BRINE_IN_EB100_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    40016,
    {
      key: "BRINE_OUT_EB100_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    40017,
    {
      key: "CONDENSER_OUT_EB100_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    40018,
    {
      key: "HOT_GAS_EB100_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    40019,
    {
      key: "LIQUID_LINE_EB100_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    40020,
    {
      key: "EVAPORATOR_EB100_BT16",
      divideBy: 10,
    },
  ],
  [
    40021,
    {
      key: "EVAPORATOR_TEMP_UNFILTERED_EB100_BT16",
      divideBy: 10,
    },
  ],
  [
    40022,
    {
      key: "SUCTION_GAS_EB100_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    40023,
    {
      key: "COMPRESSOR_SENSOR_EB100_BT18",
      divideBy: 10,
    },
  ],
  [
    40024,
    {
      key: "IMM_HEATER_SENSOR_EB100_BT19",
      divideBy: 10,
    },
  ],
  [
    40025,
    {
      key: "EXHAUST_AIR_BT20",
      divideBy: 10,
    },
  ],
  [
    40026,
    {
      key: "EXTRACT_AIR_BT21",
      divideBy: 10,
    },
  ],
  [
    40027,
    {
      key: "COLLECTOR_IN_EB100_BT26",
      divideBy: 10,
    },
  ],
  [
    40028,
    {
      key: "COLLECTOR_IN_AZ1_BT26",
      divideBy: 10,
    },
  ],
  [
    40029,
    {
      key: "COLLECTOR_OUT_AZ1_BT27",
      divideBy: 10,
    },
  ],
  [
    40030,
    {
      key: "ROOM_TEMPERATURE_EP23_BT50",
      divideBy: 10,
    },
  ],
  [
    40031,
    {
      key: "ROOM_TEMPERATURE_EP22_BT50",
      divideBy: 10,
    },
  ],
  [
    40032,
    {
      key: "ROOM_TEMPERATURE_EP21_BT50",
      divideBy: 10,
    },
  ],
  [
    40033,
    {
      key: "ROOM_TEMPERATURE_BT50",
      divideBy: 10,
    },
  ],
  [
    40042,
    {
      key: "POOL_TEMPERATURE_CL11_BT51",
      divideBy: 10,
    },
  ],
  [
    40043,
    {
      key: "SOLAR_COLLECTOR_TEMP_BT53",
      divideBy: 10,
    },
  ],
  [
    40044,
    {
      key: "SOLAR_TANK_TEMP_BOT_BT54",
      divideBy: 10,
    },
  ],
  [
    40045,
    {
      key: "COOL_TEMPERATURE_EQ1_BT64",
      divideBy: 10,
    },
  ],
  [
    40046,
    {
      key: "HEAT_MEDIUM_RETURN_EQ1_BT65",
      divideBy: 10,
    },
  ],
  [
    40047,
    {
      key: "HEAT_MEDIUM_FLOW_EB100_BT61",
      divideBy: 10,
    },
  ],
  [
    40048,
    {
      key: "HEAT_MEDIUM_RETURN_EB100_BT62",
      divideBy: 10,
    },
  ],
  [
    40049,
    {
      key: "EB100_BTX_TACH_OUT",
      divideBy: 10,
    },
  ],
  [
    40050,
    {
      key: "VALUE_AIR_VELOCITY_SENSOR_EB100_BS1",
      divideBy: 10,
    },
  ],
  [
    40051,
    {
      key: "AIR_FLOW_UNFILTERED_EB100_BS1",
    },
  ],
  [
    40054,
    {
      key: "TEMPERATURE_LIMITER_EB100_FD1",
    },
  ],
  [
    40067,
    {
      key: "AVG_OUTDOOR_TEMP_BT1",
      divideBy: 10,
    },
  ],
  [
    40070,
    {
      key: "BOILER_SENSOR_EM1_BT52",
      divideBy: 10,
    },
  ],
  [
    40071,
    {
      key: "EXTERNAL_FLOW_TEMP_BT25",
      divideBy: 10,
    },
  ],
  [
    40072,
    {
      key: "FLOW_BF1",
      divideBy: 10,
    },
  ],
  [
    40073,
    {
      key: "BEX_ENERGY",
      divideBy: 10,
    },
  ],
  [
    40074,
    {
      key: "ANODE_STATUS_EB100_FR1",
    },
  ],
  [
    40075,
    {
      key: "SUPPLY_AIR_BT22",
      divideBy: 10,
    },
  ],
  [
    40076,
    {
      key: "SOLAR_TANK_TEMP_TOP_EP30_BT55",
      divideBy: 10,
    },
  ],
  [
    40077,
    {
      key: "HOT_WATER_CHARGING_BT6",
      divideBy: 10,
    },
  ],
  [
    40078,
    {
      key: "HOT_WATER_TOP_BT7",
      divideBy: 10,
    },
  ],
  [
    40079,
    {
      key: "CURRENT_EB100_BE3",
      divideBy: 10,
    },
  ],
  [
    40081,
    {
      key: "CURRENT_EB100_BE2",
      divideBy: 10,
    },
  ],
  [
    40083,
    {
      key: "CURRENT_EB100_BE1",
      divideBy: 10,
    },
  ],
  [
    40085,
    {
      key: "BRINE_OUT_EB100_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    40086,
    {
      key: "CONDENSER_OUT_EB100_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    40087,
    {
      key: "HOT_GAS_EB100_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    40088,
    {
      key: "LIQUID_LINE_EB100_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    40089,
    {
      key: "SUCTION_GAS_EB100_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    40090,
    {
      key: "_EB100_EP15_BT202",
      divideBy: 10,
    },
  ],
  [
    40091,
    {
      key: "_EB100_EP14_BT202",
      divideBy: 10,
    },
  ],
  [
    40100,
    {
      key: "BRINE_IN_EB100_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    40101,
    {
      key: "INCOMING_AIR_TEMP",
      divideBy: 10,
    },
  ],
  [
    40102,
    {
      key: "OIL_TEMPERATURE_EB100_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    40103,
    {
      key: "OIL_TEMPERATURE_EB100_BT29",
      divideBy: 10,
    },
  ],
  [
    40104,
    {
      key: "PRESSURE_TRANSMITTER_EB100_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    40105,
    {
      key: "_EB100_BP8",
      divideBy: 10,
    },
  ],
  [
    40106,
    {
      key: "POOL_TEMPERATURE_CL12_BT51",
      divideBy: 10,
    },
  ],
  [
    40107,
    {
      key: "EXHAUST_AIR_BT20",
      divideBy: 10,
    },
  ],
  [
    40108,
    {
      key: "EXHAUST_AIR_BT20",
      divideBy: 10,
    },
  ],
  [
    40109,
    {
      key: "EXHAUST_AIR_BT20",
      divideBy: 10,
    },
  ],
  [
    40110,
    {
      key: "EXTRACT_AIR_BT21",
      divideBy: 10,
    },
  ],
  [
    40111,
    {
      key: "EXTRACT_AIR_BT21",
      divideBy: 10,
    },
  ],
  [
    40112,
    {
      key: "EXTRACT_AIR_BT21",
      divideBy: 10,
    },
  ],
  [
    40113,
    {
      key: "COLLECTOR_IN_AZ4_BT26",
      divideBy: 10,
    },
  ],
  [
    40114,
    {
      key: "COLLECTOR_IN_AZ3_BT26",
      divideBy: 10,
    },
  ],
  [
    40115,
    {
      key: "COLLECTOR_IN_AZ2_BT26",
      divideBy: 10,
    },
  ],
  [
    40116,
    {
      key: "COLLECTOR_OUT_AZ4_BT27",
      divideBy: 10,
    },
  ],
  [
    40117,
    {
      key: "COLLECTOR_OUT_AZ3_BT27",
      divideBy: 10,
    },
  ],
  [
    40118,
    {
      key: "COLLECTOR_OUT_AZ2_BT27",
      divideBy: 10,
    },
  ],
  [
    40119,
    {
      key: "OUTDOOR_TEMP_EB101_BT28",
    },
  ],
  [
    40120,
    {
      key: "HEAT_MEDIUM_RETURN_EB101_BT13",
    },
  ],
  [
    40121,
    {
      key: "ADDITION_TEMPERATURE_BT63",
      divideBy: 10,
    },
  ],
  [
    40122,
    {
      key: "BOILER_SENSOR_BT52",
      divideBy: 10,
    },
  ],
  [
    40123,
    {
      key: "PRESSURE_TRANSMITTER_EB100_EP15_BP8",
    },
  ],
  [
    40124,
    {
      key: "PRESSURE_TRANSMITTER_EB100_EP14_BP8",
    },
  ],
  [
    40126,
    {
      key: "COOL_HEAT_SENSOR_BT74",
      divideBy: 10,
    },
  ],
  [
    40127,
    {
      key: "HEAT_MEDIUM_RETURN_EP23_BT3",
      divideBy: 10,
    },
  ],
  [
    40128,
    {
      key: "HEAT_MEDIUM_RETURN_EP22_BT3",
      divideBy: 10,
    },
  ],
  [
    40129,
    {
      key: "HEAT_MEDIUM_RETURN_EP21_BT3",
      divideBy: 10,
    },
  ],
  [
    40130,
    {
      key: "HEAT_MEDIUM_RETURN",
      divideBy: 10,
    },
  ],
  [
    40131,
    {
      key: "LOW_PRESS_TRANSMIT_EB100_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    40132,
    {
      key: "LOW_PRESS_TRANSMIT_EB100_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    40141,
    {
      key: "SUPPLY_AIR_TEMP_AZ2_BT22",
      divideBy: 10,
    },
  ],
  [
    40142,
    {
      key: "OUTDOOR_TEMP_AZ2_BT23",
      divideBy: 10,
    },
  ],
  [
    40143,
    {
      key: "HEAT_MEDIUM_FLOW_AZ2_BT68",
      divideBy: 10,
    },
  ],
  [
    40144,
    {
      key: "HEAT_MEDIUM_RETURN_AZ2_BT69",
      divideBy: 10,
    },
  ],
  [
    40145,
    {
      key: "OIL_TEMPERATURE_EB100_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    40146,
    {
      key: "OIL_TEMPERATURE_EB100_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    40147,
    {
      key: "OUTGOING_HOT_WATER_BT70",
      divideBy: 10,
    },
  ],
  [
    40152,
    {
      key: "EXTERNAL_RETURN_TEMP_BT71",
      divideBy: 10,
    },
  ],
  [
    40154,
    {
      key: "SOLAR_POOL_TEMPERATURE_EP30_BT51",
      divideBy: 10,
    },
  ],
  [
    40155,
    {
      key: "COLLECTOR_TEMPERATURE_EQ1_BT57",
      divideBy: 10,
    },
  ],
  [
    40156,
    {
      key: "HEAT_DUMP_TEMP_EQ1_BT75",
      divideBy: 10,
    },
  ],
  [
    40157,
    {
      key: "SOLAR_PANEL_TEMP_EP30_BT53",
      divideBy: 10,
    },
  ],
  [
    40158,
    {
      key: "SOLAR_LOAD_TEMP_EP30_BT54",
      divideBy: 10,
    },
  ],
  [
    40159,
    {
      key: "HEAT_MEDIUM_FLOW_EP47_BT2",
      divideBy: 10,
    },
  ],
  [
    40160,
    {
      key: "HEAT_MEDIUM_FLOW_EP46_BT2",
      divideBy: 10,
    },
  ],
  [
    40161,
    {
      key: "HEAT_MEDIUM_FLOW_EP45_BT2",
      divideBy: 10,
    },
  ],
  [
    40162,
    {
      key: "HEAT_MEDIUM_FLOW_EP44_BT2",
      divideBy: 10,
    },
  ],
  [
    40163,
    {
      key: "HEAT_MEDIUM_RETURN_EP47_BT3",
      divideBy: 10,
    },
  ],
  [
    40164,
    {
      key: "HEAT_MEDIUM_RETURN_EP46_BT3",
      divideBy: 10,
    },
  ],
  [
    40165,
    {
      key: "HEAT_MEDIUM_RETURN_EP45_BT3",
      divideBy: 10,
    },
  ],
  [
    40166,
    {
      key: "HEAT_MEDIUM_RETURN_EP44_BT3",
      divideBy: 10,
    },
  ],
  [
    40167,
    {
      key: "ROOM_TEMPERATURE_EP47_BT50",
      divideBy: 10,
    },
  ],
  [
    40168,
    {
      key: "ROOM_TEMPERATURE_EP46_BT50",
      divideBy: 10,
    },
  ],
  [
    40169,
    {
      key: "ROOM_TEMPERATURE_EP45_BT50",
      divideBy: 10,
    },
  ],
  [
    40170,
    {
      key: "ROOM_TEMPERATURE_EP44_BT50",
      divideBy: 10,
    },
  ],
  [
    40179,
    {
      key: "BRINE_IN_EP10_BT26",
      divideBy: 10,
    },
  ],
  [
    40180,
    {
      key: "ROOM_TEMP_AZ30_BT50",
      divideBy: 10,
    },
  ],
  [
    40181,
    {
      key: "OUTDOOR_TEMP_AZ30_BT80",
      divideBy: 10,
    },
  ],
  [
    40182,
    {
      key: "RETURN_TEMP_AZ30_BT69",
      divideBy: 10,
    },
  ],
  [
    40183,
    {
      key: "OUTDOOR_TEMP_BT23",
      divideBy: 10,
    },
  ],
  [
    40184,
    {
      key: "FLOW_TEMP_AZ30_BT68",
      divideBy: 10,
    },
  ],
  [
    40185,
    {
      key: "AVERAGE_1H_BT1",
      divideBy: 10,
    },
  ],
  [
    40188,
    {
      key: "ROOM_TEMPAVERAGE_EP47_BT50",
      divideBy: 10,
    },
  ],
  [
    40189,
    {
      key: "ROOM_TEMPAVERAGE_EP46_BT50",
      divideBy: 10,
    },
  ],
  [
    40190,
    {
      key: "ROOM_TEMPAVERAGE_EP45_BT50",
      divideBy: 10,
    },
  ],
  [
    40191,
    {
      key: "ROOM_TEMPAVERAGE_EP44_BT50",
      divideBy: 10,
    },
  ],
  [
    40192,
    {
      key: "ROOM_TEMPAVERAGE_EP23_BT50",
      divideBy: 10,
    },
  ],
  [
    40193,
    {
      key: "ROOM_TEMPAVERAGE_EP22_BT50",
      divideBy: 10,
    },
  ],
  [
    40194,
    {
      key: "ROOM_TEMPAVERAGE_EP21_BT50",
      divideBy: 10,
    },
  ],
  [
    40195,
    {
      key: "ROOM_TEMPAVERAGE_BT50",
      divideBy: 10,
    },
  ],
  [
    40212,
    {
      key: "AVERAGE_BT74",
      divideBy: 10,
    },
  ],
  [
    40215,
    {
      key: "FLOW_BF1",
      divideBy: 10,
    },
  ],
  [
    40216,
    {
      key: "FLOW_TEMP_COOLING_BT25",
      divideBy: 10,
    },
  ],
  [
    40217,
    {
      key: "CALCULATED_FLOW_TEMP_S8",
      divideBy: 10,
    },
  ],
  [
    40218,
    {
      key: "CALCULATED_FLOW_TEMP_S7",
      divideBy: 10,
    },
  ],
  [
    40219,
    {
      key: "CALCULATED_FLOW_TEMP_S6",
      divideBy: 10,
    },
  ],
  [
    40220,
    {
      key: "CALCULATED_FLOW_TEMP_S5",
      divideBy: 10,
    },
  ],
  [
    40221,
    {
      key: "CALCULATED_FLOW_TEMP_S8",
      divideBy: 10,
    },
  ],
  [
    40222,
    {
      key: "CALCULATED_FLOW_TEMP_S7",
      divideBy: 10,
    },
  ],
  [
    40223,
    {
      key: "CALCULATED_FLOW_TEMP_S6",
      divideBy: 10,
    },
  ],
  [
    40224,
    {
      key: "CALCULATED_FLOW_TEMP_S5",
      divideBy: 10,
    },
  ],
  [
    40228,
    {
      key: "CIRC_PUMP_TIMER_EP15",
    },
  ],
  [
    40229,
    {
      key: "CIRC_PUMP_TIMER_EP14",
    },
  ],
  [
    40239,
    {
      key: "ACS_310_ACCESSORY_RELAYS",
    },
  ],
  [
    40305,
    {
      key: "MIXING_VALVE_STATE_S8",
    },
  ],
  [
    40306,
    {
      key: "MIXING_VALVE_STATE_S7",
    },
  ],
  [
    40307,
    {
      key: "MIXING_VALVE_STATE_S6",
    },
  ],
  [
    40308,
    {
      key: "MIXING_VALVE_STATE_S5",
    },
  ],
  [
    40309,
    {
      key: "STATE_NIBE_SMART",
    },
  ],
  [
    40310,
    {
      key: "EXTERNAL_ERS_1_ACCESSORY_RELAYS",
    },
  ],
  [
    40311,
    {
      key: "FAN_SPEED_GQ2",
    },
  ],
  [
    40312,
    {
      key: "FAN_SPEED_GQ3",
    },
  ],
  [
    40313,
    {
      key: "ACTUAL_HOT_WATER_TYPE_CONTROLLED_BY",
    },
  ],
  [
    40314,
    {
      key: "NEED_QN10",
    },
  ],
  [
    40316,
    {
      key: "INVERTER_LIMIT_STATUS",
    },
  ],
  [
    40317,
    {
      key: "INVERTER_DRIVE_STATUS",
    },
  ],
  [
    40321,
    {
      key: "COMPRESSOR_FREQUENCY_REQUEST",
    },
  ],
  [
    40322,
    {
      key: "MAX_COMPRESSOR_FREQUENCY_HEATING",
    },
  ],
  [
    40323,
    {
      key: "INVERTER_ALARM_CODE",
    },
  ],
  [
    40324,
    {
      key: "INVERTER_FAULT_CODE",
    },
  ],
  [
    40326,
    {
      key: "INVERTER_DRIVE_COMMAND",
    },
  ],
  [
    40327,
    {
      key: "NIBE_INVERTER_PIC_VERSION",
    },
  ],
  [
    40328,
    {
      key: "NIBE_INVERTER_8051_VERSION",
    },
  ],
  [
    40329,
    {
      key: "NIBE_INVERTER_DEF_WIZARD",
    },
  ],
  [
    40330,
    {
      key: "NIBE_INVERTER_MCE_VERSION",
    },
  ],
  [
    40331,
    {
      key: "NIBE_INVERTER_HW_VERSION",
    },
  ],
  [
    40332,
    {
      key: "NIBE_INVERTER_HW_TYPE",
    },
  ],
  [
    40339,
    {
      key: "EXTERNAL_ADJUSTMENT_S8",
    },
  ],
  [
    40340,
    {
      key: "EXTERNAL_ADJUSTMENT_S7",
    },
  ],
  [
    40341,
    {
      key: "EXTERNAL_ADJUSTMENT_S6",
    },
  ],
  [
    40342,
    {
      key: "EXTERNAL_ADJUSTMENT_S5",
    },
  ],
  [
    40364,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    40365,
    {
      key: "EXTRA_HEATING_SYSTEM_PUMP_S8",
    },
  ],
  [
    40366,
    {
      key: "EXTRA_HEATING_SYSTEM_PUMP_S7",
    },
  ],
  [
    40367,
    {
      key: "EXTRA_HEATING_SYSTEM_PUMP_S6",
    },
  ],
  [
    40368,
    {
      key: "EXTRA_HEATING_SYSTEM_PUMP_S5",
    },
  ],
  [
    40369,
    {
      key: "EXTRA_COOLING_HPAC_ACS",
    },
  ],
  [
    40370,
    {
      key: "AHPS_DOCKING_ACCESSORY_RELAYS",
    },
  ],
  [
    40469,
    {
      key: "SENSOR_ERROR_WP5_BT6",
    },
  ],
  [
    40470,
    {
      key: "SENSOR_ERROR_WP5_BT7",
    },
  ],
  [
    40471,
    {
      key: "SENSOR_ERROR_BT52_AHPS_DOCKING_ACC",
    },
  ],
  [
    40472,
    {
      key: "COM_FAILURE_SYSTEM_5",
    },
  ],
  [
    40473,
    {
      key: "COM_FAILURE_SYSTEM_6",
    },
  ],
  [
    40474,
    {
      key: "COM_FAILURE_SYSTEM_7",
    },
  ],
  [
    40475,
    {
      key: "COM_FAILURE_SYSTEM_8",
    },
  ],
  [
    40476,
    {
      key: "COM_FAILURE_AHPS_DOCKING",
    },
  ],
  [
    40477,
    {
      key: "COM_FAILURE_ERS",
    },
  ],
  [
    40478,
    {
      key: "SENSOR_ERROR_EP44_BT2",
    },
  ],
  [
    40479,
    {
      key: "SENSOR_ERROR_EP45_BT2",
    },
  ],
  [
    40480,
    {
      key: "SENSOR_ERROR_EP46_BT2",
    },
  ],
  [
    40481,
    {
      key: "SENSOR_ERROR_EP47_BT2",
    },
  ],
  [
    40482,
    {
      key: "SENSOR_ERROR_BT61",
    },
  ],
  [
    40483,
    {
      key: "COM_FAILURE_EB103_4_GP12",
    },
  ],
  [
    40484,
    {
      key: "COM_FAILURE_EB105_6_GP12",
    },
  ],
  [
    40485,
    {
      key: "COM_FAILURE_EB107_8_GP12",
    },
  ],
  [
    40520,
    {
      key: "SENSOR_ERROR_FN2_BT26",
    },
  ],
  [
    40523,
    {
      key: "TMP_COM_FAILURE_AHPS_DOCKING",
    },
  ],
  [
    40524,
    {
      key: "TMP_COM_ERROR_ERS1",
    },
  ],
  [
    40552,
    {
      key: "SENSOR_ERROR_BT51",
    },
  ],
  [
    40607,
    {
      key: "HW_INCL_INT_ADD_EP15",
      divideBy: 10,
    },
  ],
  [
    40609,
    {
      key: "HEATING_INT_ADD_INCL_EP15",
      divideBy: 10,
    },
  ],
  [
    40611,
    {
      key: "COOLING_COMPR_ONLY_EP15",
      divideBy: 10,
    },
  ],
  [
    40613,
    {
      key: "POOL_COMPR_ONLY_EP15",
      divideBy: 10,
    },
  ],
  [
    40615,
    {
      key: "HOTWATER_COMPR_ONLY_EP15",
      divideBy: 10,
    },
  ],
  [
    40617,
    {
      key: "HEATING_COMPR_ONLY_EP15",
      divideBy: 10,
    },
  ],
  [
    40625,
    {
      key: "HWC_RETURN_BT82",
      divideBy: 10,
    },
  ],
  [
    40626,
    {
      key: "WATER_HEATER_BT83",
      divideBy: 10,
    },
  ],
  [
    40627,
    {
      key: "MP_BRINE_PUMP",
    },
  ],
  [
    40647,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB108_EP15",
    },
  ],
  [
    40649,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB108_EP15",
    },
  ],
  [
    40651,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB108_EP15",
    },
  ],
  [
    40653,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB108_EP14",
    },
  ],
  [
    40655,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB108_EP14",
    },
  ],
  [
    40657,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB108_EP14",
    },
  ],
  [
    40659,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB107_EP15",
    },
  ],
  [
    40661,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB107_EP15",
    },
  ],
  [
    40663,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB107_EP15",
    },
  ],
  [
    40665,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB107_EP14",
    },
  ],
  [
    40667,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB107_EP14",
    },
  ],
  [
    40669,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB107_EP14",
    },
  ],
  [
    40671,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB106_EP15",
    },
  ],
  [
    40673,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB106_EP15",
    },
  ],
  [
    40675,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB106_EP15",
    },
  ],
  [
    40677,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB106_EP14",
    },
  ],
  [
    40679,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB106_EP14",
    },
  ],
  [
    40681,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB106_EP14",
    },
  ],
  [
    40683,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB105_EP15",
    },
  ],
  [
    40685,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB105_EP15",
    },
  ],
  [
    40687,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB105_EP15",
    },
  ],
  [
    40689,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB105_EP14",
    },
  ],
  [
    40691,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB105_EP14",
    },
  ],
  [
    40693,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB105_EP14",
    },
  ],
  [
    40695,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB104_EP15",
    },
  ],
  [
    40697,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB104_EP15",
    },
  ],
  [
    40699,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB104_EP15",
    },
  ],
  [
    40701,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB104_EP14",
    },
  ],
  [
    40703,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB104_EP14",
    },
  ],
  [
    40705,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB104_EP14",
    },
  ],
  [
    40707,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB103_EP15",
    },
  ],
  [
    40709,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB103_EP15",
    },
  ],
  [
    40711,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB103_EP15",
    },
  ],
  [
    40713,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB103_EP14",
    },
  ],
  [
    40715,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB103_EP14",
    },
  ],
  [
    40717,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB103_EP14",
    },
  ],
  [
    40719,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB102_EP15",
    },
  ],
  [
    40721,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB102_EP15",
    },
  ],
  [
    40723,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB102_EP15",
    },
  ],
  [
    40725,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB102_EP14",
    },
  ],
  [
    40727,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB102_EP14",
    },
  ],
  [
    40729,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB102_EP14",
    },
  ],
  [
    40731,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB101_EP15",
    },
  ],
  [
    40733,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB101_EP15",
    },
  ],
  [
    40735,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB101_EP15",
    },
  ],
  [
    40737,
    {
      key: "COMPRESSOR_RUN_TIME_COOLING_EB101_EP14",
    },
  ],
  [
    40739,
    {
      key: "TOT_POOL1_OP_TIME_COMPR_EB101_EP14",
    },
  ],
  [
    40741,
    {
      key: "TOT_POOL2_OP_TIME_COMPR_EB101_EP14",
    },
  ],
  [
    40755,
    {
      key: "TOT_EXT_HW_ADD_OP_TIME",
    },
  ],
  [
    40760,
    {
      key: "HZ_UNLIMITED",
    },
  ],
  [
    40762,
    {
      key: "REG_STATE_AHPS_DOCKING_SHUNT",
    },
  ],
  [
    40763,
    {
      key: "CALCULATED_FLOW_TEMP",
    },
  ],
  [
    40764,
    {
      key: "FREE_HOT_WATER_ENERGY_IN_THE_AHPS_TANK",
    },
  ],
  [
    40769,
    {
      key: "POOL2_COMPR_ONLY_EP15",
      divideBy: 10,
    },
  ],
  [
    40771,
    {
      key: "POOL2_COMPR_ONLY_EP14",
      divideBy: 10,
    },
  ],
  [
    40775,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB108",
    },
  ],
  [
    40776,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB107",
    },
  ],
  [
    40777,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB106",
    },
  ],
  [
    40778,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB105",
    },
  ],
  [
    40779,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB104",
    },
  ],
  [
    40780,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB103",
    },
  ],
  [
    40781,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB102",
    },
  ],
  [
    40782,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB101",
    },
  ],
  [
    40792,
    {
      key: "OPT_STATE",
    },
  ],
  [
    40793,
    {
      key: "OPT_VERSION",
    },
  ],
  [
    40794,
    {
      key: "STATUS",
    },
  ],
  [
    40801,
    {
      key: "OPT_REL_MODULATION_LEVEL",
    },
  ],
  [
    40802,
    {
      key: "BOILER_SENSOR",
      divideBy: 10,
    },
  ],
  [
    40806,
    {
      key: "OPT_BOILER_OP_TIME",
    },
  ],
  [
    40813,
    {
      key: "COMPRESSOR_SLOW_DOWN_REASON",
    },
  ],
  [
    40818,
    {
      key: "AVAILABLE_HEAT_COMPRESSORS",
    },
  ],
  [
    40819,
    {
      key: "AVAILABLE_HOT_WATER_COMPRESSORS",
    },
  ],
  [
    40820,
    {
      key: "AVAILABLE_POOL_1_COMPRESSORS",
    },
  ],
  [
    40821,
    {
      key: "AVAILABLE_POOL_2_COMPRESSORS",
    },
  ],
  [
    40822,
    {
      key: "AVAILABLE_COOL_COMPRESSORS",
    },
  ],
  [
    40823,
    {
      key: "AVAILABLE_EXTERNAL_COMPRESSORS",
    },
  ],
  [
    40833,
    {
      key: "PRESSOSTAT_ALARM",
    },
  ],
  [
    40834,
    {
      key: "REL_HUMIDITY",
    },
  ],
  [
    40835,
    {
      key: "COM_FAILURE_OPT",
    },
  ],
  [
    40836,
    {
      key: "COM_FAILURE_F135",
    },
  ],
  [
    40837,
    {
      key: "COM_FAILURE_HTS",
    },
  ],
  [
    40838,
    {
      key: "SENSOR_ERROR_EQ1_BT25",
    },
  ],
  [
    40839,
    {
      key: "TMP_COM_ERROR_OTX",
    },
  ],
  [
    40840,
    {
      key: "TMP_COM_ERROR_SOLAR",
    },
  ],
  [
    40844,
    {
      key: "F135_SENSOR_ERROR_BT12",
    },
  ],
  [
    40845,
    {
      key: "F135_SENSOR_ERROR_BT13",
    },
  ],
  [
    40846,
    {
      key: "F135_SENSOR_ERROR_BT16",
    },
  ],
  [
    40847,
    {
      key: "F135_SENSOR_ERROR_BT76",
    },
  ],
  [
    40848,
    {
      key: "F135_SENSOR_ERROR_BT77",
    },
  ],
  [
    40849,
    {
      key: "F135_DEFROSTING_ERROR",
    },
  ],
  [
    40850,
    {
      key: "F135_LOW_DEFROSTING_TEMP",
    },
  ],
  [
    40851,
    {
      key: "F135_LOW_EVAPORATOR_TEMP",
    },
  ],
  [
    40852,
    {
      key: "F135_FAN_ERROR",
    },
  ],
  [
    40853,
    {
      key: "F135_PUNP_ERROR",
    },
  ],
  [
    40856,
    {
      key: "ROOM_TEMPERATURE_BM1",
      divideBy: 10,
    },
  ],
  [
    40857,
    {
      key: "AIR_PRESSURE_BM1",
    },
  ],
  [
    40858,
    {
      key: "DEW_POINT_BM1",
      divideBy: 10,
    },
  ],
  [
    40859,
    {
      key: "1_BM1",
    },
  ],
  [
    40860,
    {
      key: "1_BM1",
    },
  ],
  [
    40861,
    {
      key: "1_BM1",
    },
  ],
  [
    40862,
    {
      key: "1_BM1",
    },
  ],
  [
    40863,
    {
      key: "1_BM1",
    },
  ],
  [
    40864,
    {
      key: "1_BM1",
    },
  ],
  [
    40865,
    {
      key: "1_BM1",
    },
  ],
  [
    40866,
    {
      key: "1_BM1",
    },
  ],
  [
    40867,
    {
      key: "1_BM1",
    },
  ],
  [
    40868,
    {
      key: "_ADJUST_AUX_PORT",
    },
  ],
  [
    40869,
    {
      key: "_ADJUST_STATUS",
    },
  ],
  [
    40870,
    {
      key: "OP_MODE",
    },
  ],
  [
    40871,
    {
      key: "_ADJUST_COMFORT_MODE",
    },
  ],
  [
    40872,
    {
      key: "CHANGE_IN_CURVE",
    },
  ],
  [
    40873,
    {
      key: "_ADJUST_HUMIDITY",
    },
  ],
  [
    40874,
    {
      key: "INDOOR_TEMP",
      divideBy: 10,
    },
  ],
  [
    40875,
    {
      key: "OUTDOOR_TEMP",
      divideBy: 10,
    },
  ],
  [
    40876,
    {
      key: "_ADJUST_VERSION",
    },
  ],
  [
    40877,
    {
      key: "_ADJUST_ACTIVATED",
    },
  ],
  [
    40878,
    {
      key: "_ADJUST_NEED",
    },
  ],
  [
    40879,
    {
      key: "_ADJUST_PARALLELL_FACTOR",
    },
  ],
  [
    40880,
    {
      key: "_ADJUST_MAX_CHANGE",
    },
  ],
  [
    40881,
    {
      key: "_ADJUST_AFFECT_SYSTEM8",
    },
  ],
  [
    40882,
    {
      key: "_ADJUST_AFFECT_SYSTEM7",
    },
  ],
  [
    40883,
    {
      key: "_ADJUST_AFFECT_SYSTEM6",
    },
  ],
  [
    40884,
    {
      key: "_ADJUST_AFFECT_SYSTEM5",
    },
  ],
  [
    40885,
    {
      key: "_ADJUST_AFFECT_SYSTEM4",
    },
  ],
  [
    40886,
    {
      key: "_ADJUST_AFFECT_SYSTEM3",
    },
  ],
  [
    40887,
    {
      key: "_ADJUST_AFFECT_SYSTEM2",
    },
  ],
  [
    40888,
    {
      key: "_ADJUST_AFFECT_SYSTEM1",
    },
  ],
  [
    40889,
    {
      key: "AVERAGE_BT64",
      divideBy: 10,
    },
  ],
  [
    40892,
    {
      key: "HEAT_PUMP_FUNCTIONALITY_2",
    },
  ],
  [
    40894,
    {
      key: "_EB108",
    },
  ],
  [
    40895,
    {
      key: "_EB108",
    },
  ],
  [
    40896,
    {
      key: "_EB107",
    },
  ],
  [
    40897,
    {
      key: "_EB107",
    },
  ],
  [
    40898,
    {
      key: "_EB106",
    },
  ],
  [
    40899,
    {
      key: "_EB106",
    },
  ],
  [
    40900,
    {
      key: "_EB105",
    },
  ],
  [
    40901,
    {
      key: "_EB105",
    },
  ],
  [
    40902,
    {
      key: "_EB104",
    },
  ],
  [
    40903,
    {
      key: "_EB104",
    },
  ],
  [
    40904,
    {
      key: "_EB103",
    },
  ],
  [
    40905,
    {
      key: "_EB103",
    },
  ],
  [
    40906,
    {
      key: "_EB102",
    },
  ],
  [
    40907,
    {
      key: "_EB102",
    },
  ],
  [
    40908,
    {
      key: "_EB101",
    },
  ],
  [
    40909,
    {
      key: "_EB101",
    },
  ],
  [
    40910,
    {
      key: "_EB100",
    },
  ],
  [
    40911,
    {
      key: "_EB100",
    },
  ],
  [
    40912,
    {
      key: "STATE_ACS_THERMOSTAT_EQ1",
    },
  ],
  [
    40913,
    {
      key: "STATE_ACS_THERMOSTAT_HEAT_DUMP_EQ1",
    },
  ],
  [
    40916,
    {
      key: "COM_FAILURE_ACS_THERMOSTAT",
    },
  ],
  [
    40918,
    {
      key: "TEMPERATURE_LIMITER_EB100_FD3",
    },
  ],
  [
    40919,
    {
      key: "outdoor_air_mix_status",
      divideBy: 0,
    },
  ],
  [
    40921,
    {
      key: "STATUS",
    },
  ],
  [
    40922,
    {
      key: "PUMP_SPEED_AZ10",
    },
  ],
  [
    40923,
    {
      key: "FAN_SPEED_AZ10",
    },
  ],
  [
    40928,
    {
      key: "NUMBER_OF_STARTS_AZ10",
    },
  ],
  [
    40930,
    {
      key: "TOTAL_OPERATING_TIME_AZ10",
    },
  ],
  [
    40932,
    {
      key: "KIND_OF_DEFROST",
    },
  ],
  [
    40933,
    {
      key: "DEFROSTING_TIME",
    },
  ],
  [
    40934,
    {
      key: "ACTIVE_DEFROSTING_TIME",
    },
  ],
  [
    40935,
    {
      key: "PASSIVE_DEFROSTING_TIME",
    },
  ],
  [
    40936,
    {
      key: "FAILURE_EM16",
    },
  ],
  [
    40937,
    {
      key: "ALARM_THERMAL_CUT_OUT_OFDEFROSTING_HEATER_EB16",
    },
  ],
  [
    40938,
    {
      key: "ALARMRELAY_FAULTY_EB16",
    },
  ],
  [
    40939,
    {
      key: "SENSOR_ERROR_BT28",
    },
  ],
  [
    40940,
    {
      key: "DEGREE_MINUTES_32_BIT",
    },
  ],
  [
    40942,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    40943,
    {
      key: "EXTERNAL_ERS_1_ACCESSORY_EB17",
    },
  ],
  [
    40947,
    {
      key: "CONDENSER_OUT_AZ10_BT12",
      divideBy: 10,
    },
  ],
  [
    40948,
    {
      key: "HEAT_MEDIUM_RETURN_AZ10_BT13",
      divideBy: 10,
    },
  ],
  [
    40949,
    {
      key: "EVAPORATOR_AZ10_BT16",
      divideBy: 10,
    },
  ],
  [
    40950,
    {
      key: "F135DEFROSTING_TEMP_AZ10_BT76",
      divideBy: 10,
    },
  ],
  [
    40951,
    {
      key: "EXHAUST_AIR_AZ10_BT77",
      divideBy: 10,
    },
  ],
  [
    40952,
    {
      key: "F135ACTIVE_ALARM_NUMBER_AZ10",
    },
  ],
  [
    40953,
    {
      key: "F135_HIGH_COND",
    },
  ],
  [
    40954,
    {
      key: "DEFROSTING_AZ10",
    },
  ],
  [
    40955,
    {
      key: "F135RELAY_STATUS_AZ10",
    },
  ],
  [
    40956,
    {
      key: "F135RELAY_STATUS_AZ10",
    },
  ],
  [
    40957,
    {
      key: "F135RELAY_STATUS_AZ10",
    },
  ],
  [
    40958,
    {
      key: "F135RELAY_STATUS_AZ10",
    },
  ],
  [
    40959,
    {
      key: "F135RELAY_STATUS_AZ10",
    },
  ],
  [
    40960,
    {
      key: "F135RELAY_STATUS_AZ10",
    },
  ],
  [
    40961,
    {
      key: "CHARGE_PUMP_SPEED_AZ10",
    },
  ],
  [
    40962,
    {
      key: "FAN_SPEED_AZ10",
    },
  ],
  [
    40963,
    {
      key: "F135_RELAY_STATUS_PSUP",
    },
  ],
  [
    40964,
    {
      key: "F135VERSION_AZ10",
    },
  ],
  [
    40965,
    {
      key: "FAILED_EE_WRITINGS_IS_NEVER_RESET",
    },
  ],
  [
    40967,
    {
      key: "FAILED_EE_WRITINGS_RESETS_AT_RESTART",
    },
  ],
  [
    40969,
    {
      key: "EE_WRITING_TRIES_IS_NEVER_RESET",
    },
  ],
  [
    40971,
    {
      key: "EE_WRITING_TRIES_RESETS_AT_RESTART",
    },
  ],
  [
    40993,
    {
      key: "INVERTER_MIN_SPEED",
    },
  ],
  [
    40994,
    {
      key: "INVERTER_MAX_SPEED",
    },
  ],
  [
    40995,
    {
      key: "EXTERNAL_ENERGY_METER_2",
      divideBy: 10,
    },
  ],
  [
    40997,
    {
      key: "EXTERNAL_ENERGY_METER_1",
      divideBy: 10,
    },
  ],
  [
    41000,
    {
      key: "F2400_F2120_ALARM_NUMBER_EB101",
    },
  ],
  [
    41002,
    {
      key: "FAN_SPEED_EB101",
    },
  ],
  [
    41003,
    {
      key: "F2120_MAX_FAN_SPEED_EB101",
    },
  ],
  [
    41004,
    {
      key: "F2120_MIN_FAN_SPEED_EB101",
    },
  ],
  [
    41005,
    {
      key: "F2120_MAX_COMPRESSOR_SPEED_EB101",
    },
  ],
  [
    41006,
    {
      key: "F2120_MIN_COMPRESSOR_SPEED_EB101",
    },
  ],
  [
    41007,
    {
      key: "F2120_CALCULATED_POWER_EB101",
      divideBy: 10,
    },
  ],
  [
    41008,
    {
      key: "TIME_TO_DEFROST_EB101",
    },
  ],
  [
    41009,
    {
      key: "F2120_DEFROST_INDEX_EB101",
    },
  ],
  [
    41010,
    {
      key: "EEV_SSH_SP_EB101",
      divideBy: 10,
    },
  ],
  [
    41011,
    {
      key: "EEV_SSH_ACT_EB101",
      divideBy: 10,
    },
  ],
  [
    41012,
    {
      key: "EEV_SSH_ERROR_EB101",
      divideBy: 10,
    },
  ],
  [
    41013,
    {
      key: "EEV_TEMPREF_EB101",
      divideBy: 10,
    },
  ],
  [
    41014,
    {
      key: "EEV_TE_SP_EB101",
      divideBy: 10,
    },
  ],
  [
    41015,
    {
      key: "EEV_TE_PV_EB101",
      divideBy: 10,
    },
  ],
  [
    41016,
    {
      key: "EEV_TE_ERROR_EB101",
      divideBy: 10,
    },
  ],
  [
    41017,
    {
      key: "EEV_VALVE_POS_EB101",
    },
  ],
  [
    41018,
    {
      key: "EVI_SSH_SP_EB101",
      divideBy: 10,
    },
  ],
  [
    41019,
    {
      key: "EVI_SSH_ACT_EB101",
      divideBy: 10,
    },
  ],
  [
    41020,
    {
      key: "EVI_SSH_ERROR_EB101",
      divideBy: 10,
    },
  ],
  [
    41021,
    {
      key: "EVI_TEMPREF_EB101",
      divideBy: 10,
    },
  ],
  [
    41022,
    {
      key: "EVI_TE_SP_EB101",
      divideBy: 10,
    },
  ],
  [
    41023,
    {
      key: "EVI_TE_PV_EB101",
      divideBy: 10,
    },
  ],
  [
    41024,
    {
      key: "EVI_TE_ERROR_EB101",
      divideBy: 10,
    },
  ],
  [
    41025,
    {
      key: "EVI_VALVE_POS_EB101",
    },
  ],
  [
    41026,
    {
      key: "VALUE_AIR_VELOCITY_SENSOR_EB100_BS1",
      divideBy: 10,
    },
  ],
  [
    41027,
    {
      key: "REL_HUMIDITY_BM1",
    },
  ],
  [
    41042,
    {
      key: "LP_DEW_PRESSURE_SENSOR_EB108_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    41043,
    {
      key: "HP_DEW_PRESSURE_SENSOR_EB108_EP15_BP9",
      divideBy: 10,
    },
  ],
  [
    41044,
    {
      key: "EVI_TEMP_EB108_EP15_BT81",
      divideBy: 10,
    },
  ],
  [
    41045,
    {
      key: "EVI_PRESSURE_EB108_EP15_BP11",
    },
  ],
  [
    41046,
    {
      key: "EVI_DEW_PRESSURE_EB108_EP15_BP11",
      divideBy: 10,
    },
  ],
  [
    41047,
    {
      key: "EVAPTOR_TEMP_EB108_EP15_BT84",
      divideBy: 10,
    },
  ],
  [
    41048,
    {
      key: "FAN_STATUS_EB108_EP15",
    },
  ],
  [
    41049,
    {
      key: "FAN_SET_EB108_EP15",
    },
  ],
  [
    41050,
    {
      key: "LOW_PRESSURE_EB108_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    41051,
    {
      key: "HIGH_PRESSURE_EB108_EP14_BP9",
      divideBy: 10,
    },
  ],
  [
    41052,
    {
      key: "INJECTION_EB108_EP14_BT81",
      divideBy: 10,
    },
  ],
  [
    41053,
    {
      key: "EVI_PRESSURE_EB108_EP14_BP11",
    },
  ],
  [
    41054,
    {
      key: "EVI_DEW_PRESSURE_EB108_EP14_BP11",
      divideBy: 10,
    },
  ],
  [
    41055,
    {
      key: "EVAPORATOR_EB108_EP14_BT84",
      divideBy: 10,
    },
  ],
  [
    41056,
    {
      key: "FAN_STATUS_EB108_EP14",
    },
  ],
  [
    41057,
    {
      key: "FAN_SET_EB108_EP14",
    },
  ],
  [
    41058,
    {
      key: "LP_DEW_PRESSURE_SENSOR_EB107_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    41059,
    {
      key: "HP_DEW_PRESSURE_SENSOR_EB107_EP15_BP9",
      divideBy: 10,
    },
  ],
  [
    41060,
    {
      key: "EVI_TEMP_EB107_EP15_BT81",
      divideBy: 10,
    },
  ],
  [
    41061,
    {
      key: "EVI_PRESSURE_EB107_EP15_BP11",
    },
  ],
  [
    41062,
    {
      key: "EVI_DEW_PRESSURE_EB107_EP15_BP11",
      divideBy: 10,
    },
  ],
  [
    41063,
    {
      key: "EVAPTOR_TEMP_EB107_EP15_BT84",
      divideBy: 10,
    },
  ],
  [
    41064,
    {
      key: "FAN_STATUS_EB107_EP15",
    },
  ],
  [
    41065,
    {
      key: "FAN_SET_EB107_EP15",
    },
  ],
  [
    41066,
    {
      key: "LOW_PRESSURE_EB107_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    41067,
    {
      key: "HIGH_PRESSURE_EB107_EP14_BP9",
      divideBy: 10,
    },
  ],
  [
    41068,
    {
      key: "INJECTION_EB107_EP14_BT81",
      divideBy: 10,
    },
  ],
  [
    41069,
    {
      key: "EVI_PRESSURE_EB107_EP14_BP11",
    },
  ],
  [
    41070,
    {
      key: "EVI_DEW_PRESSURE_EB107_EP14_BP11",
      divideBy: 10,
    },
  ],
  [
    41071,
    {
      key: "EVAPORATOR_EB107_EP14_BT84",
      divideBy: 10,
    },
  ],
  [
    41072,
    {
      key: "FAN_STATUS_EB107_EP14",
    },
  ],
  [
    41073,
    {
      key: "FAN_SET_EB107_EP14",
    },
  ],
  [
    41074,
    {
      key: "LP_DEW_PRESSURE_SENSOR_EB106_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    41075,
    {
      key: "HP_DEW_PRESSURE_SENSOR_EB106_EP15_BP9",
      divideBy: 10,
    },
  ],
  [
    41076,
    {
      key: "EVI_TEMP_EB106_EP15_BT81",
      divideBy: 10,
    },
  ],
  [
    41077,
    {
      key: "EVI_PRESSURE_EB106_EP15_BP11",
    },
  ],
  [
    41078,
    {
      key: "EVI_DEW_PRESSURE_EB106_EP15_BP11",
      divideBy: 10,
    },
  ],
  [
    41079,
    {
      key: "EVAPTOR_TEMP_EB106_EP15_BT84",
      divideBy: 10,
    },
  ],
  [
    41080,
    {
      key: "FAN_STATUS_EB106_EP15",
    },
  ],
  [
    41081,
    {
      key: "FAN_SET_EB106_EP15",
    },
  ],
  [
    41082,
    {
      key: "LOW_PRESSURE_EB106_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    41083,
    {
      key: "HIGH_PRESSURE_EB106_EP14_BP9",
      divideBy: 10,
    },
  ],
  [
    41084,
    {
      key: "INJECTION_EB106_EP14_BT81",
      divideBy: 10,
    },
  ],
  [
    41085,
    {
      key: "EVI_PRESSURE_EB106_EP14_BP11",
    },
  ],
  [
    41086,
    {
      key: "EVI_DEW_PRESSURE_EB106_EP14_BP11",
      divideBy: 10,
    },
  ],
  [
    41087,
    {
      key: "EVAPORATOR_EB106_EP14_BT84",
      divideBy: 10,
    },
  ],
  [
    41088,
    {
      key: "FAN_STATUS_EB106_EP14",
    },
  ],
  [
    41089,
    {
      key: "FAN_SET_EB106_EP14",
    },
  ],
  [
    41090,
    {
      key: "LP_DEW_PRESSURE_SENSOR_EB105_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    41091,
    {
      key: "HP_DEW_PRESSURE_SENSOR_EB105_EP15_BP9",
      divideBy: 10,
    },
  ],
  [
    41092,
    {
      key: "EVI_TEMP_EB105_EP15_BT81",
      divideBy: 10,
    },
  ],
  [
    41093,
    {
      key: "EVI_PRESSURE_EB105_EP15_BP11",
    },
  ],
  [
    41094,
    {
      key: "EVI_DEW_PRESSURE_EB105_EP15_BP11",
      divideBy: 10,
    },
  ],
  [
    41095,
    {
      key: "EVAPTOR_TEMP_EB105_EP15_BT84",
      divideBy: 10,
    },
  ],
  [
    41096,
    {
      key: "FAN_STATUS_EB105_EP15",
    },
  ],
  [
    41097,
    {
      key: "FAN_SET_EB105_EP15",
    },
  ],
  [
    41098,
    {
      key: "LOW_PRESSURE_EB105_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    41099,
    {
      key: "HIGH_PRESSURE_EB105_EP14_BP9",
      divideBy: 10,
    },
  ],
  [
    41100,
    {
      key: "INJECTION_EB105_EP14_BT81",
      divideBy: 10,
    },
  ],
  [
    41101,
    {
      key: "EVI_PRESSURE_EB105_EP14_BP11",
    },
  ],
  [
    41102,
    {
      key: "EVI_DEW_PRESSURE_EB105_EP14_BP11",
      divideBy: 10,
    },
  ],
  [
    41103,
    {
      key: "EVAPORATOR_EB105_EP14_BT84",
      divideBy: 10,
    },
  ],
  [
    41104,
    {
      key: "FAN_STATUS_EB105_EP14",
    },
  ],
  [
    41105,
    {
      key: "FAN_SET_EB105_EP14",
    },
  ],
  [
    41106,
    {
      key: "LP_DEW_PRESSURE_SENSOR_EB104_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    41107,
    {
      key: "HP_DEW_PRESSURE_SENSOR_EB104_EP15_BP9",
      divideBy: 10,
    },
  ],
  [
    41108,
    {
      key: "EVI_TEMP_EB104_EP15_BT81",
      divideBy: 10,
    },
  ],
  [
    41109,
    {
      key: "EVI_PRESSURE_EB104_EP15_BP11",
    },
  ],
  [
    41110,
    {
      key: "EVI_DEW_PRESSURE_EB104_EP15_BP11",
      divideBy: 10,
    },
  ],
  [
    41111,
    {
      key: "EVAPTOR_TEMP_EB104_EP15_BT84",
      divideBy: 10,
    },
  ],
  [
    41112,
    {
      key: "FAN_STATUS_EB104_EP15",
    },
  ],
  [
    41113,
    {
      key: "FAN_SET_EB104_EP15",
    },
  ],
  [
    41114,
    {
      key: "LOW_PRESSURE_EB104_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    41115,
    {
      key: "HIGH_PRESSURE_EB104_EP14_BP9",
      divideBy: 10,
    },
  ],
  [
    41116,
    {
      key: "INJECTION_EB104_EP14_BT81",
      divideBy: 10,
    },
  ],
  [
    41117,
    {
      key: "EVI_PRESSURE_EB104_EP14_BP11",
    },
  ],
  [
    41118,
    {
      key: "EVI_DEW_PRESSURE_EB104_EP14_BP11",
      divideBy: 10,
    },
  ],
  [
    41119,
    {
      key: "EVAPORATOR_EB104_EP14_BT84",
      divideBy: 10,
    },
  ],
  [
    41120,
    {
      key: "FAN_STATUS_EB104_EP14",
    },
  ],
  [
    41121,
    {
      key: "FAN_SET_EB104_EP14",
    },
  ],
  [
    41122,
    {
      key: "LP_DEW_PRESSURE_SENSOR_EB103_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    41123,
    {
      key: "HP_DEW_PRESSURE_SENSOR_EB103_EP15_BP9",
      divideBy: 10,
    },
  ],
  [
    41124,
    {
      key: "EVI_TEMP_EB103_EP15_BT81",
      divideBy: 10,
    },
  ],
  [
    41125,
    {
      key: "EVI_PRESSURE_EB103_EP15_BP11",
    },
  ],
  [
    41126,
    {
      key: "EVI_DEW_PRESSURE_EB103_EP15_BP11",
      divideBy: 10,
    },
  ],
  [
    41127,
    {
      key: "EVAPTOR_TEMP_EB103_EP15_BT84",
      divideBy: 10,
    },
  ],
  [
    41128,
    {
      key: "FAN_STATUS_EB103_EP15",
    },
  ],
  [
    41129,
    {
      key: "FAN_SET_EB103_EP15",
    },
  ],
  [
    41130,
    {
      key: "LOW_PRESSURE_EB103_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    41131,
    {
      key: "HIGH_PRESSURE_EB103_EP14_BP9",
      divideBy: 10,
    },
  ],
  [
    41132,
    {
      key: "INJECTION_EB103_EP14_BT81",
      divideBy: 10,
    },
  ],
  [
    41133,
    {
      key: "EVI_PRESSURE_EB103_EP14_BP11",
    },
  ],
  [
    41134,
    {
      key: "EVI_DEW_PRESSURE_EB103_EP14_BP11",
      divideBy: 10,
    },
  ],
  [
    41135,
    {
      key: "EVAPORATOR_EB103_EP14_BT84",
      divideBy: 10,
    },
  ],
  [
    41136,
    {
      key: "FAN_STATUS_EB103_EP14",
    },
  ],
  [
    41137,
    {
      key: "FAN_SET_EB103_EP14",
    },
  ],
  [
    41138,
    {
      key: "LP_DEW_PRESSURE_SENSOR_EB102_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    41139,
    {
      key: "HP_DEW_PRESSURE_SENSOR_EB102_EP15_BP9",
      divideBy: 10,
    },
  ],
  [
    41140,
    {
      key: "EVI_TEMP_EB102_EP15_BT81",
      divideBy: 10,
    },
  ],
  [
    41141,
    {
      key: "EVI_PRESSURE_EB102_EP15_BP11",
    },
  ],
  [
    41142,
    {
      key: "EVI_DEW_PRESSURE_EB102_EP15_BP11",
      divideBy: 10,
    },
  ],
  [
    41143,
    {
      key: "EVAPTOR_TEMP_EB102_EP15_BT84",
      divideBy: 10,
    },
  ],
  [
    41144,
    {
      key: "FAN_STATUS_EB102_EP15",
    },
  ],
  [
    41145,
    {
      key: "FAN_SET_EB102_EP15",
    },
  ],
  [
    41146,
    {
      key: "LOW_PRESSURE_EB102_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    41147,
    {
      key: "HIGH_PRESSURE_EB102_EP14_BP9",
      divideBy: 10,
    },
  ],
  [
    41148,
    {
      key: "INJECTION_EB102_EP14_BT81",
      divideBy: 10,
    },
  ],
  [
    41149,
    {
      key: "EVI_PRESSURE_EB102_EP14_BP11",
    },
  ],
  [
    41150,
    {
      key: "EVI_DEW_PRESSURE_EB102_EP14_BP11",
      divideBy: 10,
    },
  ],
  [
    41151,
    {
      key: "EVAPORATOR_EB102_EP14_BT84",
      divideBy: 10,
    },
  ],
  [
    41152,
    {
      key: "FAN_STATUS_EB102_EP14",
    },
  ],
  [
    41153,
    {
      key: "FAN_SET_EB102_EP14",
    },
  ],
  [
    41154,
    {
      key: "LP_DEW_PRESSURE_SENSOR_EB101_EP15_BP8",
      divideBy: 10,
    },
  ],
  [
    41155,
    {
      key: "HP_DEW_PRESSURE_SENSOR_EB101_EP15_BP9",
      divideBy: 10,
    },
  ],
  [
    41156,
    {
      key: "EVI_TEMP_EB101_EP15_BT81",
      divideBy: 10,
    },
  ],
  [
    41157,
    {
      key: "EVI_PRESSURE_EB101_EP15_BP11",
    },
  ],
  [
    41158,
    {
      key: "EVI_DEW_PRESSURE_EB101_EP15_BP11",
      divideBy: 10,
    },
  ],
  [
    41159,
    {
      key: "EVAPTOR_TEMP_EB101_EP15_BT84",
      divideBy: 10,
    },
  ],
  [
    41160,
    {
      key: "FAN_STATUS_EB101_EP15",
    },
  ],
  [
    41161,
    {
      key: "FAN_SET_EB101_EP15",
    },
  ],
  [
    41162,
    {
      key: "LOW_PRESSURE_EB101_EP14_BP8",
      divideBy: 10,
    },
  ],
  [
    41163,
    {
      key: "HIGH_PRESSURE_EB101_EP14_BP9",
      divideBy: 10,
    },
  ],
  [
    41164,
    {
      key: "INJECTION_EB101_EP14_BT81",
      divideBy: 10,
    },
  ],
  [
    41165,
    {
      key: "EVI_PRESSURE_EB101_EP14_BP11",
    },
  ],
  [
    41166,
    {
      key: "EVI_DEW_PRESSURE_EB101_EP14_BP11",
      divideBy: 10,
    },
  ],
  [
    41167,
    {
      key: "EVAPORATOR_EB101_EP14_BT84",
      divideBy: 10,
    },
  ],
  [
    41168,
    {
      key: "FAN_STATUS_EB101_EP14",
    },
  ],
  [
    41169,
    {
      key: "FAN_SET_EB101_EP14",
    },
  ],
  [
    41186,
    {
      key: "CALCULATED_FLOW_TEMP",
      divideBy: 10,
    },
  ],
  [
    41187,
    {
      key: "HIGH_CONDENSER_OUT_ALARM_AZ10",
    },
  ],
  [
    41188,
    {
      key: "HIGH_CONDENSER_IN_ALARM_AZ10",
    },
  ],
  [
    41189,
    {
      key: "CURRENT_AA20_BE5",
    },
  ],
  [
    41190,
    {
      key: "AVERAGE_CURRENT_AA20_BE5",
    },
  ],
  [
    41191,
    {
      key: "STATUS",
    },
  ],
  [
    41210,
    {
      key: "ROOM_TEMPERATURE_AZ4_BT50",
      divideBy: 10,
    },
  ],
  [
    41211,
    {
      key: "ROOM_TEMPERATURE_AZ3_BT50",
      divideBy: 10,
    },
  ],
  [
    41212,
    {
      key: "ROOM_TEMPERATURE_AZ2_BT50",
      divideBy: 10,
    },
  ],
  [
    41213,
    {
      key: "ROOM_TEMPERATURE_AZ1_BT50",
      divideBy: 10,
    },
  ],
  [
    41214,
    {
      key: "OEK_ACCESSORY_BLOCK_STATUS",
    },
  ],
  [
    41215,
    {
      key: "STATUS",
    },
  ],
  [
    41216,
    {
      key: "OEK_ACCESSORY_RELAYS",
    },
  ],
  [
    41217,
    {
      key: "_EB108",
    },
  ],
  [
    41219,
    {
      key: "_EB108",
    },
  ],
  [
    41221,
    {
      key: "_EB107",
    },
  ],
  [
    41223,
    {
      key: "_EB107",
    },
  ],
  [
    41225,
    {
      key: "_EB106",
    },
  ],
  [
    41227,
    {
      key: "_EB106",
    },
  ],
  [
    41229,
    {
      key: "_EB105",
    },
  ],
  [
    41231,
    {
      key: "_EB105",
    },
  ],
  [
    41233,
    {
      key: "_EB104",
    },
  ],
  [
    41235,
    {
      key: "_EB104",
    },
  ],
  [
    41237,
    {
      key: "_EB103",
    },
  ],
  [
    41239,
    {
      key: "_EB103",
    },
  ],
  [
    41241,
    {
      key: "_EB102",
    },
  ],
  [
    41243,
    {
      key: "_EB102",
    },
  ],
  [
    41245,
    {
      key: "_EB101",
    },
  ],
  [
    41247,
    {
      key: "_EB101",
    },
  ],
  [
    41256,
    {
      key: "FAN_SPEED_CURRENT",
    },
  ],
  [
    41257,
    {
      key: "FAN_SPEED_CURRENT",
    },
  ],
  [
    41258,
    {
      key: "FAN_SPEED_CURRENT",
    },
  ],
  [
    41265,
    {
      key: "SMART_HOME_MODE",
    },
  ],
  [
    41266,
    {
      key: "OFFSET_TO_SMART_HOME_SYSTEM",
      divideBy: 10,
    },
  ],
  [
    41267,
    {
      key: "SMART_HOME_CTRL_SYST_8",
    },
  ],
  [
    41268,
    {
      key: "SMART_HOME_CTRL_SYST_7",
    },
  ],
  [
    41269,
    {
      key: "SMART_HOME_CTRL_SYST_6",
    },
  ],
  [
    41270,
    {
      key: "SMART_HOME_CTRL_SYST_5",
    },
  ],
  [
    41271,
    {
      key: "SMART_HOME_CTRL_SYST_4",
    },
  ],
  [
    41272,
    {
      key: "SMART_HOME_CTRL_SYST_3",
    },
  ],
  [
    41273,
    {
      key: "SMART_HOME_CTRL_SYST_2",
    },
  ],
  [
    41274,
    {
      key: "SMART_HOME_CTRL_SYST_1",
    },
  ],
  [
    41283,
    {
      key: "FAILURE_OPT",
    },
  ],
  [
    41284,
    {
      key: "COM_FAILURE_OEK",
    },
  ],
  [
    41285,
    {
      key: "SENSOR_ERROR_BT28",
    },
  ],
  [
    41287,
    {
      key: "OPT_BOILER_HAS_PRIORITY_HOT_WATER",
    },
  ],
  [
    41289,
    {
      key: "COST",
    },
  ],
  [
    41290,
    {
      key: "COST",
    },
  ],
  [
    41291,
    {
      key: "COST",
    },
  ],
  [
    41292,
    {
      key: "SMART_ENERGY_SOURCE_COSTADDITION_OPT10",
    },
  ],
  [
    41293,
    {
      key: "SMART_ENERGY_SOURCE_COST_EXT_STEP_ADDITION",
    },
  ],
  [
    41294,
    {
      key: "SMART_ENERGY_SOURCE_COST_INT_STEP_ADDITION",
    },
  ],
  [
    41295,
    {
      key: "SMART_ENERGY_SOURCE_COST_SHUNTED_ADDITION",
    },
  ],
  [
    41296,
    {
      key: "SMART_ENERGY_SOURCE_COST_PRIORITY_ADDITION",
    },
  ],
  [
    41297,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP15_S8",
    },
  ],
  [
    41298,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP15_S7",
    },
  ],
  [
    41299,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP15_S6",
    },
  ],
  [
    41300,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP15_S5",
    },
  ],
  [
    41301,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP15_S4",
    },
  ],
  [
    41302,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP15_S3",
    },
  ],
  [
    41303,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP15_S2",
    },
  ],
  [
    41304,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP15_S1",
    },
  ],
  [
    41305,
    {
      key: "SMART_ENERGY_SOURCE_COST_M_EP15",
    },
  ],
  [
    41306,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S8",
    },
  ],
  [
    41307,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S7",
    },
  ],
  [
    41308,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S6",
    },
  ],
  [
    41309,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S5",
    },
  ],
  [
    41310,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S4",
    },
  ],
  [
    41311,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S3",
    },
  ],
  [
    41312,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S2",
    },
  ],
  [
    41313,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S1",
    },
  ],
  [
    41314,
    {
      key: "SMART_ENERGY_SOURCE_COST_M_EP14",
    },
  ],
  [
    41315,
    {
      key: "PRIO_NBR",
    },
  ],
  [
    41316,
    {
      key: "PRIO_NBR",
    },
  ],
  [
    41317,
    {
      key: "PRIO_NBR",
    },
  ],
  [
    41318,
    {
      key: "PRIO_NBRADDITION_OPT10",
    },
  ],
  [
    41319,
    {
      key: "PRIO_NBR_EXT_STEP_ADDITION",
    },
  ],
  [
    41320,
    {
      key: "PRIO_NBR_INT_STEP_ADDITION",
    },
  ],
  [
    41321,
    {
      key: "PRIO_NBR_SHUNTED_ADDITION",
    },
  ],
  [
    41322,
    {
      key: "PRIO_NBR_PRIORITY_ADDITION",
    },
  ],
  [
    41323,
    {
      key: "PRIO_NBREP15_S8",
    },
  ],
  [
    41324,
    {
      key: "PRIO_NBREP15_S7",
    },
  ],
  [
    41325,
    {
      key: "PRIO_NBREP15_S6",
    },
  ],
  [
    41326,
    {
      key: "PRIO_NBREP15_S5",
    },
  ],
  [
    41327,
    {
      key: "PRIO_NBREP15_S4",
    },
  ],
  [
    41328,
    {
      key: "PRIO_NBREP15_S3",
    },
  ],
  [
    41329,
    {
      key: "PRIO_NBREP15_S2",
    },
  ],
  [
    41330,
    {
      key: "PRIO_NBREP15_S1",
    },
  ],
  [
    41331,
    {
      key: "PRIO_NBR_M_EP15",
    },
  ],
  [
    41332,
    {
      key: "PRIO_NBREP14_S8",
    },
  ],
  [
    41333,
    {
      key: "PRIO_NBREP14_S7",
    },
  ],
  [
    41334,
    {
      key: "PRIO_NBREP14_S6",
    },
  ],
  [
    41335,
    {
      key: "PRIO_NBREP14_S5",
    },
  ],
  [
    41336,
    {
      key: "PRIO_NBREP14_S4",
    },
  ],
  [
    41337,
    {
      key: "PRIO_NBREP14_S3",
    },
  ],
  [
    41338,
    {
      key: "PRIO_NBREP14_S2",
    },
  ],
  [
    41339,
    {
      key: "PRIO_NBREP14_S1",
    },
  ],
  [
    41340,
    {
      key: "PRIO_NBR_M_EP14",
    },
  ],
  [
    41360,
    {
      key: "SMART_ENERGY_SOURCE_SOURCE_PRIO_7",
    },
  ],
  [
    41361,
    {
      key: "SMART_ENERGY_SOURCE_SOURCE_PRIO_6",
    },
  ],
  [
    41362,
    {
      key: "SMART_ENERGY_SOURCE_SOURCE_PRIO_5",
    },
  ],
  [
    41363,
    {
      key: "SMART_ENERGY_SOURCE_SOURCE_PRIO_4",
    },
  ],
  [
    41364,
    {
      key: "SMART_ENERGY_SOURCE_SOURCE_PRIO_3",
    },
  ],
  [
    41365,
    {
      key: "SMART_ENERGY_SOURCE_SOURCE_PRIO_2",
    },
  ],
  [
    41366,
    {
      key: "SMART_ENERGY_SOURCE_SOURCE_PRIO_1",
    },
  ],
  [
    41370,
    {
      key: "ALLOW_OF_SOURCEADDITION_OPT10",
    },
  ],
  [
    41371,
    {
      key: "ALLOW_OF_SOURCE_EXT_STEP_ADDITION",
    },
  ],
  [
    41372,
    {
      key: "ALLOW_OF_SOURCE_INT_STEP_ADDITION",
    },
  ],
  [
    41373,
    {
      key: "ALLOW_OF_SOURCE_SHUNTED_ADDITION",
    },
  ],
  [
    41374,
    {
      key: "ALLOW_OF_SOURCE_PRIORITY_ADDITION",
    },
  ],
  [
    41375,
    {
      key: "ALLOW_OF_SOURCEEP15_S8",
    },
  ],
  [
    41376,
    {
      key: "ALLOW_OF_SOURCEEP15_S7",
    },
  ],
  [
    41377,
    {
      key: "ALLOW_OF_SOURCEEP15_S6",
    },
  ],
  [
    41378,
    {
      key: "ALLOW_OF_SOURCEEP15_S5",
    },
  ],
  [
    41379,
    {
      key: "ALLOW_OF_SOURCEEP15_S4",
    },
  ],
  [
    41380,
    {
      key: "ALLOW_OF_SOURCEEP15_S3",
    },
  ],
  [
    41381,
    {
      key: "ALLOW_OF_SOURCEEP15_S2",
    },
  ],
  [
    41382,
    {
      key: "ALLOW_OF_SOURCEEP15_S1",
    },
  ],
  [
    41383,
    {
      key: "ALLOW_OF_SOURCE_M_EP15",
    },
  ],
  [
    41384,
    {
      key: "ALLOW_OF_SOURCEEP14_S8",
    },
  ],
  [
    41385,
    {
      key: "ALLOW_OF_SOURCEEP14_S7",
    },
  ],
  [
    41386,
    {
      key: "ALLOW_OF_SOURCEEP14_S6",
    },
  ],
  [
    41387,
    {
      key: "ALLOW_OF_SOURCEEP14_S5",
    },
  ],
  [
    41388,
    {
      key: "ALLOW_OF_SOURCEEP14_S4",
    },
  ],
  [
    41389,
    {
      key: "ALLOW_OF_SOURCEEP14_S3",
    },
  ],
  [
    41390,
    {
      key: "ALLOW_OF_SOURCEEP14_S2",
    },
  ],
  [
    41391,
    {
      key: "ALLOW_OF_SOURCEEP14_S1",
    },
  ],
  [
    41392,
    {
      key: "ALLOW_OF_SOURCE_M_EP14",
    },
  ],
  [
    41393,
    {
      key: "SMART_ENERGY_SOURCE_ENERGY_SOURCE_PRIO_7_START_DM",
    },
  ],
  [
    41395,
    {
      key: "SMART_ENERGY_SOURCE_ENERGY_SOURCE_PRIO_6_START_DM",
    },
  ],
  [
    41397,
    {
      key: "SMART_ENERGY_SOURCE_ENERGY_SOURCE_PRIO_5_START_DM",
    },
  ],
  [
    41399,
    {
      key: "SMART_ENERGY_SOURCE_ENERGY_SOURCE_PRIO_4_START_DM",
    },
  ],
  [
    41401,
    {
      key: "SMART_ENERGY_SOURCE_ENERGY_SOURCE_PRIO_3_START_DM",
    },
  ],
  [
    41403,
    {
      key: "SMART_ENERGY_SOURCE_ENERGY_SOURCE_PRIO_2_START_DM",
    },
  ],
  [
    41405,
    {
      key: "SMART_ENERGY_SOURCE_ENERGY_SOURCE_PRIO_1_START_DM",
    },
  ],
  [
    41407,
    {
      key: "ENERGY_SOURCE_PRIO_7_START_DM",
    },
  ],
  [
    41409,
    {
      key: "ENERGY_SOURCE_PRIO_6_START_DM",
    },
  ],
  [
    41411,
    {
      key: "ENERGY_SOURCE_PRIO_5_START_DM",
    },
  ],
  [
    41413,
    {
      key: "ENERGY_SOURCE_PRIO_4_START_DM",
    },
  ],
  [
    41415,
    {
      key: "ENERGY_SOURCE_PRIO_3_START_DM",
    },
  ],
  [
    41417,
    {
      key: "ENERGY_SOURCE_PRIO_2_START_DM",
    },
  ],
  [
    41419,
    {
      key: "ENERGY_SOURCE_PRIO_1_START_DM",
    },
  ],
  [
    41421,
    {
      key: "SMART_ENERGY_SOURCE_DEGREE_MINUTE_MIN_VALUE",
    },
  ],
  [
    41423,
    {
      key: "TO_SHORTEN_TIME_BETWEEN_CALC_OF_PRIO_LIST_TEST_MODE",
    },
  ],
  [
    41424,
    {
      key: "PRICE_OPT_ADDITION_OPT10",
    },
  ],
  [
    41425,
    {
      key: "PRICE_EXTERN_SHUNT_ADD",
    },
  ],
  [
    41426,
    {
      key: "PRICE_EXTERN_STEP_ADD",
    },
  ],
  [
    41427,
    {
      key: "PRICE_ELECTRICITY",
    },
  ],
  [
    41428,
    {
      key: "TMP_ERROR_IN_OPT",
    },
  ],
  [
    41429,
    {
      key: "COLLECTOR_IN_EP12_BT57",
      divideBy: 10,
    },
  ],
  [
    41430,
    {
      key: "COLLECTOR_OUT_EP12_BT58",
      divideBy: 10,
    },
  ],
  [
    41433,
    {
      key: "SENSOR_ERROR_BT57",
    },
  ],
  [
    41434,
    {
      key: "SENSOR_ERROR_BT58",
    },
  ],
  [
    41435,
    {
      key: "INFO_LOW_GROUND_WATER_TEMPERATURE",
    },
  ],
  [
    41436,
    {
      key: "TEMP_LUX_FORCE_SET",
    },
  ],
  [
    41437,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S8",
    },
  ],
  [
    41438,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S7",
    },
  ],
  [
    41439,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S6",
    },
  ],
  [
    41440,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S5",
    },
  ],
  [
    41441,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S4",
    },
  ],
  [
    41442,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S3",
    },
  ],
  [
    41443,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S2",
    },
  ],
  [
    41444,
    {
      key: "SMART_ENERGY_SOURCE_COSTEP14_S1",
    },
  ],
  [
    41445,
    {
      key: "SMART_ENERGY_SOURCE_COST_M_EP14",
    },
  ],
  [
    41446,
    {
      key: "HOT_WATER_OPT10",
    },
  ],
  [
    41457,
    {
      key: "PERMISSION_OF_OPT_TO_RUN_HW",
    },
  ],
  [
    41458,
    {
      key: "WOOD_BOILER_1_ACTIVE_0_NOT_ACTIVE",
    },
  ],
  [
    41468,
    {
      key: "F2400_F2120_ALARM_NUMBER_EB108",
    },
  ],
  [
    41469,
    {
      key: "FAN_SPEED_EB108",
    },
  ],
  [
    41470,
    {
      key: "F2120_MAX_FAN_SPEED_EB108",
    },
  ],
  [
    41471,
    {
      key: "F2120_MIN_FAN_SPEED_EB108",
    },
  ],
  [
    41472,
    {
      key: "F2120_MAX_COMPRESSOR_SPEED_EB108",
    },
  ],
  [
    41473,
    {
      key: "F2120_MIN_COMPRESSOR_SPEED_EB108",
    },
  ],
  [
    41474,
    {
      key: "F2120_CALCULATED_POWER_EB108",
      divideBy: 10,
    },
  ],
  [
    41475,
    {
      key: "TIME_TO_DEFROST_EB108",
    },
  ],
  [
    41476,
    {
      key: "F2120_DEFROST_INDEX_EB108",
    },
  ],
  [
    41477,
    {
      key: "EEV_SSH_SP_EB108",
      divideBy: 10,
    },
  ],
  [
    41478,
    {
      key: "EEV_SSH_ACT_EB108",
      divideBy: 10,
    },
  ],
  [
    41479,
    {
      key: "EEV_SSH_ERROR_EB108",
      divideBy: 10,
    },
  ],
  [
    41480,
    {
      key: "EEV_TEMPREF_EB108",
      divideBy: 10,
    },
  ],
  [
    41481,
    {
      key: "EEV_TE_SP_EB108",
      divideBy: 10,
    },
  ],
  [
    41482,
    {
      key: "EEV_TE_PV_EB108",
      divideBy: 10,
    },
  ],
  [
    41483,
    {
      key: "EEV_TE_ERROR_EB108",
      divideBy: 10,
    },
  ],
  [
    41484,
    {
      key: "EEV_VALVE_POS_EB108",
    },
  ],
  [
    41485,
    {
      key: "EVI_SSH_SP_EB108",
      divideBy: 10,
    },
  ],
  [
    41486,
    {
      key: "EVI_SSH_ACT_EB108",
      divideBy: 10,
    },
  ],
  [
    41487,
    {
      key: "EVI_SSH_ERROR_EB108",
      divideBy: 10,
    },
  ],
  [
    41488,
    {
      key: "EVI_TEMPREF_EB108",
      divideBy: 10,
    },
  ],
  [
    41489,
    {
      key: "EVI_TE_SP_EB108",
      divideBy: 10,
    },
  ],
  [
    41490,
    {
      key: "EVI_TE_PV_EB108",
      divideBy: 10,
    },
  ],
  [
    41491,
    {
      key: "EVI_TE_ERROR_EB108",
      divideBy: 10,
    },
  ],
  [
    41492,
    {
      key: "EVI_VALVE_POS_EB108",
    },
  ],
  [
    41493,
    {
      key: "F2400_F2120_ALARM_NUMBER_EB107",
    },
  ],
  [
    41494,
    {
      key: "FAN_SPEED_EB107",
    },
  ],
  [
    41495,
    {
      key: "F2120_MAX_FAN_SPEED_EB107",
    },
  ],
  [
    41496,
    {
      key: "F2120_MIN_FAN_SPEED_EB107",
    },
  ],
  [
    41497,
    {
      key: "F2120_MAX_COMPRESSOR_SPEED_EB107",
    },
  ],
  [
    41498,
    {
      key: "F2120_MIN_COMPRESSOR_SPEED_EB107",
    },
  ],
  [
    41499,
    {
      key: "F2120_CALCULATED_POWER_EB107",
      divideBy: 10,
    },
  ],
  [
    41500,
    {
      key: "TIME_TO_DEFROST_EB107",
    },
  ],
  [
    41501,
    {
      key: "F2120_DEFROST_INDEX_EB107",
    },
  ],
  [
    41502,
    {
      key: "EEV_SSH_SP_EB107",
      divideBy: 10,
    },
  ],
  [
    41503,
    {
      key: "EEV_SSH_ACT_EB107",
      divideBy: 10,
    },
  ],
  [
    41504,
    {
      key: "EEV_SSH_ERROR_EB107",
      divideBy: 10,
    },
  ],
  [
    41505,
    {
      key: "EEV_TEMPREF_EB107",
      divideBy: 10,
    },
  ],
  [
    41506,
    {
      key: "EEV_TE_SP_EB107",
      divideBy: 10,
    },
  ],
  [
    41507,
    {
      key: "EEV_TE_PV_EB107",
      divideBy: 10,
    },
  ],
  [
    41508,
    {
      key: "EEV_TE_ERROR_EB107",
      divideBy: 10,
    },
  ],
  [
    41509,
    {
      key: "EEV_VALVE_POS_EB107",
    },
  ],
  [
    41510,
    {
      key: "EVI_SSH_SP_EB107",
      divideBy: 10,
    },
  ],
  [
    41511,
    {
      key: "EVI_SSH_ACT_EB107",
      divideBy: 10,
    },
  ],
  [
    41512,
    {
      key: "EVI_SSH_ERROR_EB107",
      divideBy: 10,
    },
  ],
  [
    41513,
    {
      key: "EVI_TEMPREF_EB107",
      divideBy: 10,
    },
  ],
  [
    41514,
    {
      key: "EVI_TE_SP_EB107",
      divideBy: 10,
    },
  ],
  [
    41515,
    {
      key: "EVI_TE_PV_EB107",
      divideBy: 10,
    },
  ],
  [
    41516,
    {
      key: "EVI_TE_ERROR_EB107",
      divideBy: 10,
    },
  ],
  [
    41517,
    {
      key: "EVI_VALVE_POS_EB107",
    },
  ],
  [
    41518,
    {
      key: "F2400_F2120_ALARM_NUMBER_EB106",
    },
  ],
  [
    41519,
    {
      key: "FAN_SPEED_EB106",
    },
  ],
  [
    41520,
    {
      key: "F2120_MAX_FAN_SPEED_EB106",
    },
  ],
  [
    41521,
    {
      key: "F2120_MIN_FAN_SPEED_EB106",
    },
  ],
  [
    41522,
    {
      key: "F2120_MAX_COMPRESSOR_SPEED_EB106",
    },
  ],
  [
    41523,
    {
      key: "F2120_MIN_COMPRESSOR_SPEED_EB106",
    },
  ],
  [
    41524,
    {
      key: "F2120_CALCULATED_POWER_EB106",
      divideBy: 10,
    },
  ],
  [
    41525,
    {
      key: "TIME_TO_DEFROST_EB106",
    },
  ],
  [
    41526,
    {
      key: "F2120_DEFROST_INDEX_EB106",
    },
  ],
  [
    41527,
    {
      key: "EEV_SSH_SP_EB106",
      divideBy: 10,
    },
  ],
  [
    41528,
    {
      key: "EEV_SSH_ACT_EB106",
      divideBy: 10,
    },
  ],
  [
    41529,
    {
      key: "EEV_SSH_ERROR_EB106",
      divideBy: 10,
    },
  ],
  [
    41530,
    {
      key: "EEV_TEMPREF_EB106",
      divideBy: 10,
    },
  ],
  [
    41531,
    {
      key: "EEV_TE_SP_EB106",
      divideBy: 10,
    },
  ],
  [
    41532,
    {
      key: "EEV_TE_PV_EB106",
      divideBy: 10,
    },
  ],
  [
    41533,
    {
      key: "EEV_TE_ERROR_EB106",
      divideBy: 10,
    },
  ],
  [
    41534,
    {
      key: "EEV_VALVE_POS_EB106",
    },
  ],
  [
    41535,
    {
      key: "EVI_SSH_SP_EB106",
      divideBy: 10,
    },
  ],
  [
    41536,
    {
      key: "EVI_SSH_ACT_EB106",
      divideBy: 10,
    },
  ],
  [
    41537,
    {
      key: "EVI_SSH_ERROR_EB106",
      divideBy: 10,
    },
  ],
  [
    41538,
    {
      key: "EVI_TEMPREF_EB106",
      divideBy: 10,
    },
  ],
  [
    41539,
    {
      key: "EVI_TE_SP_EB106",
      divideBy: 10,
    },
  ],
  [
    41540,
    {
      key: "EVI_TE_PV_EB106",
      divideBy: 10,
    },
  ],
  [
    41541,
    {
      key: "EVI_TE_ERROR_EB106",
      divideBy: 10,
    },
  ],
  [
    41542,
    {
      key: "EVI_VALVE_POS_EB106",
    },
  ],
  [
    41543,
    {
      key: "F2400_F2120_ALARM_NUMBER_EB105",
    },
  ],
  [
    41544,
    {
      key: "FAN_SPEED_EB105",
    },
  ],
  [
    41545,
    {
      key: "F2120_MAX_FAN_SPEED_EB105",
    },
  ],
  [
    41546,
    {
      key: "F2120_MIN_FAN_SPEED_EB105",
    },
  ],
  [
    41547,
    {
      key: "F2120_MAX_COMPRESSOR_SPEED_EB105",
    },
  ],
  [
    41548,
    {
      key: "F2120_MIN_COMPRESSOR_SPEED_EB105",
    },
  ],
  [
    41549,
    {
      key: "F2120_CALCULATED_POWER_EB105",
      divideBy: 10,
    },
  ],
  [
    41550,
    {
      key: "TIME_TO_DEFROST_EB105",
    },
  ],
  [
    41551,
    {
      key: "F2120_DEFROST_INDEX_EB105",
    },
  ],
  [
    41552,
    {
      key: "EEV_SSH_SP_EB105",
      divideBy: 10,
    },
  ],
  [
    41553,
    {
      key: "EEV_SSH_ACT_EB105",
      divideBy: 10,
    },
  ],
  [
    41554,
    {
      key: "EEV_SSH_ERROR_EB105",
      divideBy: 10,
    },
  ],
  [
    41555,
    {
      key: "EEV_TEMPREF_EB105",
      divideBy: 10,
    },
  ],
  [
    41556,
    {
      key: "EEV_TE_SP_EB105",
      divideBy: 10,
    },
  ],
  [
    41557,
    {
      key: "EEV_TE_PV_EB105",
      divideBy: 10,
    },
  ],
  [
    41558,
    {
      key: "EEV_TE_ERROR_EB105",
      divideBy: 10,
    },
  ],
  [
    41559,
    {
      key: "EEV_VALVE_POS_EB105",
    },
  ],
  [
    41560,
    {
      key: "EVI_SSH_SP_EB105",
      divideBy: 10,
    },
  ],
  [
    41561,
    {
      key: "EVI_SSH_ACT_EB105",
      divideBy: 10,
    },
  ],
  [
    41562,
    {
      key: "EVI_SSH_ERROR_EB105",
      divideBy: 10,
    },
  ],
  [
    41563,
    {
      key: "EVI_TEMPREF_EB105",
      divideBy: 10,
    },
  ],
  [
    41564,
    {
      key: "EVI_TE_SP_EB105",
      divideBy: 10,
    },
  ],
  [
    41565,
    {
      key: "EVI_TE_PV_EB105",
      divideBy: 10,
    },
  ],
  [
    41566,
    {
      key: "EVI_TE_ERROR_EB105",
      divideBy: 10,
    },
  ],
  [
    41567,
    {
      key: "EVI_VALVE_POS_EB105",
    },
  ],
  [
    41568,
    {
      key: "F2400_F2120_ALARM_NUMBER_EB104",
    },
  ],
  [
    41569,
    {
      key: "FAN_SPEED_EB104",
    },
  ],
  [
    41570,
    {
      key: "F2120_MAX_FAN_SPEED_EB104",
    },
  ],
  [
    41571,
    {
      key: "F2120_MIN_FAN_SPEED_EB104",
    },
  ],
  [
    41572,
    {
      key: "F2120_MAX_COMPRESSOR_SPEED_EB104",
    },
  ],
  [
    41573,
    {
      key: "F2120_MIN_COMPRESSOR_SPEED_EB104",
    },
  ],
  [
    41574,
    {
      key: "F2120_CALCULATED_POWER_EB104",
      divideBy: 10,
    },
  ],
  [
    41575,
    {
      key: "TIME_TO_DEFROST_EB104",
    },
  ],
  [
    41576,
    {
      key: "F2120_DEFROST_INDEX_EB104",
    },
  ],
  [
    41577,
    {
      key: "EEV_SSH_SP_EB104",
      divideBy: 10,
    },
  ],
  [
    41578,
    {
      key: "EEV_SSH_ACT_EB104",
      divideBy: 10,
    },
  ],
  [
    41579,
    {
      key: "EEV_SSH_ERROR_EB104",
      divideBy: 10,
    },
  ],
  [
    41580,
    {
      key: "EEV_TEMPREF_EB104",
      divideBy: 10,
    },
  ],
  [
    41581,
    {
      key: "EEV_TE_SP_EB104",
      divideBy: 10,
    },
  ],
  [
    41582,
    {
      key: "EEV_TE_PV_EB104",
      divideBy: 10,
    },
  ],
  [
    41583,
    {
      key: "EEV_TE_ERROR_EB104",
      divideBy: 10,
    },
  ],
  [
    41584,
    {
      key: "EEV_VALVE_POS_EB104",
    },
  ],
  [
    41585,
    {
      key: "EVI_SSH_SP_EB104",
      divideBy: 10,
    },
  ],
  [
    41586,
    {
      key: "EVI_SSH_ACT_EB104",
      divideBy: 10,
    },
  ],
  [
    41587,
    {
      key: "EVI_SSH_ERROR_EB104",
      divideBy: 10,
    },
  ],
  [
    41588,
    {
      key: "EVI_TEMPREF_EB104",
      divideBy: 10,
    },
  ],
  [
    41589,
    {
      key: "EVI_TE_SP_EB104",
      divideBy: 10,
    },
  ],
  [
    41590,
    {
      key: "EVI_TE_PV_EB104",
      divideBy: 10,
    },
  ],
  [
    41591,
    {
      key: "EVI_TE_ERROR_EB104",
      divideBy: 10,
    },
  ],
  [
    41592,
    {
      key: "EVI_VALVE_POS_EB104",
    },
  ],
  [
    41593,
    {
      key: "F2400_F2120_ALARM_NUMBER_EB103",
    },
  ],
  [
    41594,
    {
      key: "FAN_SPEED_EB103",
    },
  ],
  [
    41595,
    {
      key: "F2120_MAX_FAN_SPEED_EB103",
    },
  ],
  [
    41596,
    {
      key: "F2120_MIN_FAN_SPEED_EB103",
    },
  ],
  [
    41597,
    {
      key: "F2120_MAX_COMPRESSOR_SPEED_EB103",
    },
  ],
  [
    41598,
    {
      key: "F2120_MIN_COMPRESSOR_SPEED_EB103",
    },
  ],
  [
    41599,
    {
      key: "F2120_CALCULATED_POWER_EB103",
      divideBy: 10,
    },
  ],
  [
    41600,
    {
      key: "TIME_TO_DEFROST_EB103",
    },
  ],
  [
    41601,
    {
      key: "F2120_DEFROST_INDEX_EB103",
    },
  ],
  [
    41602,
    {
      key: "EEV_SSH_SP_EB103",
      divideBy: 10,
    },
  ],
  [
    41603,
    {
      key: "EEV_SSH_ACT_EB103",
      divideBy: 10,
    },
  ],
  [
    41604,
    {
      key: "EEV_SSH_ERROR_EB103",
      divideBy: 10,
    },
  ],
  [
    41605,
    {
      key: "EEV_TEMPREF_EB103",
      divideBy: 10,
    },
  ],
  [
    41606,
    {
      key: "EEV_TE_SP_EB103",
      divideBy: 10,
    },
  ],
  [
    41607,
    {
      key: "EEV_TE_PV_EB103",
      divideBy: 10,
    },
  ],
  [
    41608,
    {
      key: "EEV_TE_ERROR_EB103",
      divideBy: 10,
    },
  ],
  [
    41609,
    {
      key: "EEV_VALVE_POS_EB103",
    },
  ],
  [
    41610,
    {
      key: "EVI_SSH_SP_EB103",
      divideBy: 10,
    },
  ],
  [
    41611,
    {
      key: "EVI_SSH_ACT_EB103",
      divideBy: 10,
    },
  ],
  [
    41612,
    {
      key: "EVI_SSH_ERROR_EB103",
      divideBy: 10,
    },
  ],
  [
    41613,
    {
      key: "EVI_TEMPREF_EB103",
      divideBy: 10,
    },
  ],
  [
    41614,
    {
      key: "EVI_TE_SP_EB103",
      divideBy: 10,
    },
  ],
  [
    41615,
    {
      key: "EVI_TE_PV_EB103",
      divideBy: 10,
    },
  ],
  [
    41616,
    {
      key: "EVI_TE_ERROR_EB103",
      divideBy: 10,
    },
  ],
  [
    41617,
    {
      key: "EVI_VALVE_POS_EB103",
    },
  ],
  [
    41618,
    {
      key: "F2400_F2120_ALARM_NUMBER_EB102",
    },
  ],
  [
    41619,
    {
      key: "FAN_SPEED_EB102",
    },
  ],
  [
    41620,
    {
      key: "F2120_MAX_FAN_SPEED_EB102",
    },
  ],
  [
    41621,
    {
      key: "F2120_MIN_FAN_SPEED_EB102",
    },
  ],
  [
    41622,
    {
      key: "F2120_MAX_COMPRESSOR_SPEED_EB102",
    },
  ],
  [
    41623,
    {
      key: "F2120_MIN_COMPRESSOR_SPEED_EB102",
    },
  ],
  [
    41624,
    {
      key: "F2120_CALCULATED_POWER_EB102",
      divideBy: 10,
    },
  ],
  [
    41625,
    {
      key: "TIME_TO_DEFROST_EB102",
    },
  ],
  [
    41626,
    {
      key: "F2120_DEFROST_INDEX_EB102",
    },
  ],
  [
    41627,
    {
      key: "EEV_SSH_SP_EB102",
      divideBy: 10,
    },
  ],
  [
    41628,
    {
      key: "EEV_SSH_ACT_EB102",
      divideBy: 10,
    },
  ],
  [
    41629,
    {
      key: "EEV_SSH_ERROR_EB102",
      divideBy: 10,
    },
  ],
  [
    41630,
    {
      key: "EEV_TEMPREF_EB102",
      divideBy: 10,
    },
  ],
  [
    41631,
    {
      key: "EEV_TE_SP_EB102",
      divideBy: 10,
    },
  ],
  [
    41632,
    {
      key: "EEV_TE_PV_EB102",
      divideBy: 10,
    },
  ],
  [
    41633,
    {
      key: "EEV_TE_ERROR_EB102",
      divideBy: 10,
    },
  ],
  [
    41634,
    {
      key: "EEV_VALVE_POS_EB102",
    },
  ],
  [
    41635,
    {
      key: "EVI_SSH_SP_EB102",
      divideBy: 10,
    },
  ],
  [
    41636,
    {
      key: "EVI_SSH_ACT_EB102",
      divideBy: 10,
    },
  ],
  [
    41637,
    {
      key: "EVI_SSH_ERROR_EB102",
      divideBy: 10,
    },
  ],
  [
    41638,
    {
      key: "EVI_TEMPREF_EB102",
      divideBy: 10,
    },
  ],
  [
    41639,
    {
      key: "EVI_TE_SP_EB102",
      divideBy: 10,
    },
  ],
  [
    41640,
    {
      key: "EVI_TE_PV_EB102",
      divideBy: 10,
    },
  ],
  [
    41641,
    {
      key: "EVI_TE_ERROR_EB102",
      divideBy: 10,
    },
  ],
  [
    41642,
    {
      key: "EVI_VALVE_POS_EB102",
    },
  ],
  [
    41668,
    {
      key: "NEED_ADDITION",
    },
  ],
  [
    41671,
    {
      key: "WIND_SPEED_FROM_WEATHER_DATA",
    },
  ],
  [
    41672,
    {
      key: "HUMIDITY_FROM_WEATHER_DATA",
    },
  ],
  [
    41673,
    {
      key: "TEMPERATURE_FROM_WEATHER_DATA",
      divideBy: 10,
    },
  ],
  [
    41674,
    {
      key: "TEMPERATURE_FROM_WEATHER_DATA_FORECAST",
      divideBy: 10,
    },
  ],
  [
    41705,
    {
      key: "HOT_WATER",
    },
  ],
  [
    41708,
    {
      key: "IS_ONE_PHASE_EB108",
    },
  ],
  [
    41709,
    {
      key: "_EB108",
    },
  ],
  [
    41710,
    {
      key: "IS_ONE_PHASE_EB107",
    },
  ],
  [
    41711,
    {
      key: "_EB107",
    },
  ],
  [
    41712,
    {
      key: "IS_ONE_PHASE_EB106",
    },
  ],
  [
    41713,
    {
      key: "_EB106",
    },
  ],
  [
    41714,
    {
      key: "IS_ONE_PHASE_EB105",
    },
  ],
  [
    41715,
    {
      key: "_EB105",
    },
  ],
  [
    41716,
    {
      key: "IS_ONE_PHASE_EB104",
    },
  ],
  [
    41717,
    {
      key: "_EB104",
    },
  ],
  [
    41718,
    {
      key: "IS_ONE_PHASE_EB103",
    },
  ],
  [
    41719,
    {
      key: "_EB103",
    },
  ],
  [
    41720,
    {
      key: "IS_ONE_PHASE_EB102",
    },
  ],
  [
    41721,
    {
      key: "_EB102",
    },
  ],
  [
    41722,
    {
      key: "IS_ONE_PHASE_EB101",
    },
  ],
  [
    41723,
    {
      key: "_EB101",
    },
  ],
  [
    41726,
    {
      key: "NEW_HEATING_MEDIUM_PUMP_SPEED",
    },
  ],
  [
    41728,
    {
      key: "INCOMPATIBLE_HEATPUMP_ALARM_F21X0",
    },
  ],
  [
    41729,
    {
      key: "MAX_TIMER_FOR_COMPRESSOR_HEATER_EP15",
    },
  ],
  [
    41731,
    {
      key: "MAX_TIMER_FOR_COMPRESSOR_HEATER_EP14",
    },
  ],
  [
    41742,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    41743,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    41744,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    41745,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    41746,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    41747,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    41748,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    41749,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    41750,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    41751,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    41752,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    41753,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    41754,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    41755,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    41756,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    41757,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    41758,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    41759,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    41760,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    41761,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    41762,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    41763,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    41764,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    41765,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    41766,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    41767,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    41768,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    41769,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    41770,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    41771,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    41772,
    {
      key: "ALARM_CONDENSOR_IN_LEVEL_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    41773,
    {
      key: "ALARM_CONDENSOR_OUT_LEVEL_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    41778,
    {
      key: "CURRENT_COMPR_FREQUENCY",
      divideBy: 10,
    },
  ],
  [
    41783,
    {
      key: "LOW_FLOW_OPT",
    },
  ],
  [
    41784,
    {
      key: "HIGH_CONDENSATION_WATER_LEVEL",
    },
  ],
  [
    41785,
    {
      key: "SENSOR_ERROR_BT28",
    },
  ],
  [
    41786,
    {
      key: "NO_SPOT_PRICE_AVAILABLE_FOR_SES",
    },
  ],
  [
    41787,
    {
      key: "CONDENSATION_WATER_LEVEL_GUARD_EB100_BL3",
    },
  ],
  [
    41789,
    {
      key: "COMPRESSOR_SIZE_EB108",
      divideBy: 10,
    },
  ],
  [
    41790,
    {
      key: "CALC_COMPRESSOR_FREQ_EB108_EP15",
    },
  ],
  [
    41791,
    {
      key: "CALC_COMPRESSOR_FREQ_EB108_EP14",
    },
  ],
  [
    41792,
    {
      key: "F2120_COOL_STATUS_EB108",
    },
  ],
  [
    41793,
    {
      key: "COMPRESSOR_SIZE_EB107",
      divideBy: 10,
    },
  ],
  [
    41794,
    {
      key: "CALC_COMPRESSOR_FREQ_EB107_EP15",
    },
  ],
  [
    41795,
    {
      key: "CALC_COMPRESSOR_FREQ_EB107_EP14",
    },
  ],
  [
    41796,
    {
      key: "F2120_COOL_STATUS_EB107",
    },
  ],
  [
    41797,
    {
      key: "COMPRESSOR_SIZE_EB106",
      divideBy: 10,
    },
  ],
  [
    41798,
    {
      key: "CALC_COMPRESSOR_FREQ_EB106_EP15",
    },
  ],
  [
    41799,
    {
      key: "CALC_COMPRESSOR_FREQ_EB106_EP14",
    },
  ],
  [
    41800,
    {
      key: "F2120_COOL_STATUS_EB106",
    },
  ],
  [
    41801,
    {
      key: "COMPRESSOR_SIZE_EB105",
      divideBy: 10,
    },
  ],
  [
    41802,
    {
      key: "CALC_COMPRESSOR_FREQ_EB105_EP15",
    },
  ],
  [
    41803,
    {
      key: "CALC_COMPRESSOR_FREQ_EB105_EP14",
    },
  ],
  [
    41804,
    {
      key: "F2120_COOL_STATUS_EB105",
    },
  ],
  [
    41805,
    {
      key: "COMPRESSOR_SIZE_EB104",
      divideBy: 10,
    },
  ],
  [
    41806,
    {
      key: "CALC_COMPRESSOR_FREQ_EB104_EP15",
    },
  ],
  [
    41807,
    {
      key: "CALC_COMPRESSOR_FREQ_EB104_EP14",
    },
  ],
  [
    41808,
    {
      key: "F2120_COOL_STATUS_EB104",
    },
  ],
  [
    41809,
    {
      key: "COMPRESSOR_SIZE_EB103",
      divideBy: 10,
    },
  ],
  [
    41810,
    {
      key: "CALC_COMPRESSOR_FREQ_EB103_EP15",
    },
  ],
  [
    41811,
    {
      key: "CALC_COMPRESSOR_FREQ_EB103_EP14",
    },
  ],
  [
    41812,
    {
      key: "F2120_COOL_STATUS_EB103",
    },
  ],
  [
    41813,
    {
      key: "COMPRESSOR_SIZE_EB102",
      divideBy: 10,
    },
  ],
  [
    41814,
    {
      key: "CALC_COMPRESSOR_FREQ_EB102_EP15",
    },
  ],
  [
    41815,
    {
      key: "CALC_COMPRESSOR_FREQ_EB102_EP14",
    },
  ],
  [
    41816,
    {
      key: "F2120_COOL_STATUS_EB102",
    },
  ],
  [
    41817,
    {
      key: "COMPRESSOR_SIZE_EB101",
      divideBy: 10,
    },
  ],
  [
    41818,
    {
      key: "CALC_COMPRESSOR_FREQ_EB101_EP15",
    },
  ],
  [
    41819,
    {
      key: "CALC_COMPRESSOR_FREQ_EB101_EP14",
    },
  ],
  [
    41820,
    {
      key: "F2120_COOL_STATUS_EB101",
    },
  ],
  [
    41825,
    {
      key: "_EB108",
    },
  ],
  [
    41826,
    {
      key: "_EB107",
    },
  ],
  [
    41827,
    {
      key: "_EB106",
    },
  ],
  [
    41828,
    {
      key: "_EB105",
    },
  ],
  [
    41829,
    {
      key: "_EB104",
    },
  ],
  [
    41830,
    {
      key: "_EB103",
    },
  ],
  [
    41831,
    {
      key: "_EB102",
    },
  ],
  [
    41832,
    {
      key: "_EB101",
    },
  ],
  [
    41833,
    {
      key: "_EB100",
    },
  ],
  [
    41834,
    {
      key: "F21X0_HIGH_TEMP_HEATING",
      divideBy: 10,
    },
  ],
  [
    41835,
    {
      key: "F21X0_LOW_TEMP_HEATING",
      divideBy: 10,
    },
  ],
  [
    41836,
    {
      key: "F21X0_HIGH_TEMP_HEATING",
      divideBy: 10,
    },
  ],
  [
    41837,
    {
      key: "F21X0_LOW_TEMP_COOLING",
      divideBy: 10,
    },
  ],
  [
    41838,
    {
      key: "HEATING_MEDIUM_PUMP_REAL_SPEED",
    },
  ],
  [
    41839,
    {
      key: "FAN_REAL_SPEED",
    },
  ],
  [
    41846,
    {
      key: "VENTILATION",
      divideBy: 10,
    },
  ],
  [
    41848,
    {
      key: "HOT_WATER",
      divideBy: 10,
    },
  ],
  [
    41850,
    {
      key: "HEATING",
      divideBy: 10,
    },
  ],
  [
    41852,
    {
      key: "HIGH_CONDENSATION_WATER_LEVEL",
    },
  ],
  [
    41861,
    {
      key: "ALARM_SMART_ENERGY_SOURCE_FUNCTION_MISSING_SPOT_PRICE",
    },
  ],
  [
    41862,
    {
      key: "SET_POINT_FOR_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    41863,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB108_EP15",
    },
  ],
  [
    41864,
    {
      key: "SET_POINT_FOR_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    41865,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB108_EP14",
    },
  ],
  [
    41866,
    {
      key: "SET_POINT_FOR_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    41867,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB107_EP15",
    },
  ],
  [
    41868,
    {
      key: "SET_POINT_FOR_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    41869,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB107_EP14",
    },
  ],
  [
    41870,
    {
      key: "SET_POINT_FOR_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    41871,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB106_EP15",
    },
  ],
  [
    41872,
    {
      key: "SET_POINT_FOR_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    41873,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB106_EP14",
    },
  ],
  [
    41874,
    {
      key: "SET_POINT_FOR_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    41875,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB105_EP15",
    },
  ],
  [
    41876,
    {
      key: "SET_POINT_FOR_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    41877,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB105_EP14",
    },
  ],
  [
    41878,
    {
      key: "SET_POINT_FOR_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    41879,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB104_EP15",
    },
  ],
  [
    41880,
    {
      key: "SET_POINT_FOR_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    41881,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB104_EP14",
    },
  ],
  [
    41882,
    {
      key: "SET_POINT_FOR_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    41883,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB103_EP15",
    },
  ],
  [
    41884,
    {
      key: "SET_POINT_FOR_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    41885,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB103_EP14",
    },
  ],
  [
    41886,
    {
      key: "SET_POINT_FOR_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    41887,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB102_EP15",
    },
  ],
  [
    41888,
    {
      key: "SET_POINT_FOR_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    41889,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB102_EP14",
    },
  ],
  [
    41890,
    {
      key: "SET_POINT_FOR_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    41891,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB101_EP15",
    },
  ],
  [
    41892,
    {
      key: "SET_POINT_FOR_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    41893,
    {
      key: "START_UP_FREQUENCY_FOR_INVERTER_MODULE_EB101_EP14",
    },
  ],
  [
    41898,
    {
      key: "_EB108",
    },
  ],
  [
    41899,
    {
      key: "_EB108",
    },
  ],
  [
    41900,
    {
      key: "_EB107",
    },
  ],
  [
    41901,
    {
      key: "_EB107",
    },
  ],
  [
    41902,
    {
      key: "_EB106",
    },
  ],
  [
    41903,
    {
      key: "_EB106",
    },
  ],
  [
    41904,
    {
      key: "_EB105",
    },
  ],
  [
    41905,
    {
      key: "_EB105",
    },
  ],
  [
    41906,
    {
      key: "_EB104",
    },
  ],
  [
    41907,
    {
      key: "_EB104",
    },
  ],
  [
    41908,
    {
      key: "_EB103",
    },
  ],
  [
    41909,
    {
      key: "_EB103",
    },
  ],
  [
    41910,
    {
      key: "_EB102",
    },
  ],
  [
    41911,
    {
      key: "_EB102",
    },
  ],
  [
    41912,
    {
      key: "_EB101",
    },
  ],
  [
    41913,
    {
      key: "_EB101",
    },
  ],
  [
    41914,
    {
      key: "_EB100",
    },
  ],
  [
    41915,
    {
      key: "_EB100",
    },
  ],
  [
    41919,
    {
      key: "CORRECTION_FACTOR_BS1",
    },
  ],
  [
    41923,
    {
      key: "ESTIMATED_FLOW_HEAT_BF1",
      divideBy: 10,
    },
  ],
  [
    41924,
    {
      key: "ESTIMATED_FLOW_HW_BF1",
      divideBy: 10,
    },
  ],
  [
    41928,
    {
      key: "SMART_PRICE_ADAPTION_PRICE",
    },
  ],
  [
    41929,
    {
      key: "SMART_PRICE_ADAPTION_PRICE_LEVEL",
    },
  ],
  [
    41930,
    {
      key: "POWER_10_AA23_BE5",
    },
  ],
  [
    41931,
    {
      key: "POWER_9_AA23_BE5",
    },
  ],
  [
    41932,
    {
      key: "POWER_8_AA23_BE5",
    },
  ],
  [
    41933,
    {
      key: "POWER_7_AA23_BE5",
    },
  ],
  [
    41934,
    {
      key: "POWER_6_AA23_BE5",
    },
  ],
  [
    41935,
    {
      key: "POWER_5_AA23_BE5",
    },
  ],
  [
    41936,
    {
      key: "POWER_4_AA23_BE5",
    },
  ],
  [
    41937,
    {
      key: "POWER_3_AA23_BE5",
    },
  ],
  [
    41938,
    {
      key: "POWER_2_AA23_BE5",
    },
  ],
  [
    41939,
    {
      key: "POWER_1_AA23_BE5",
    },
  ],
  [
    41940,
    {
      key: "ERROR_HIGH_10_AA23_BE5",
    },
  ],
  [
    41941,
    {
      key: "ERROR_HIGH_9_AA23_BE5",
    },
  ],
  [
    41942,
    {
      key: "ERROR_HIGH_8_AA23_BE5",
    },
  ],
  [
    41943,
    {
      key: "ERROR_HIGH_7_AA23_BE5",
    },
  ],
  [
    41944,
    {
      key: "ERROR_HIGH_6_AA23_BE5",
    },
  ],
  [
    41945,
    {
      key: "ERROR_HIGH_5_AA23_BE5",
    },
  ],
  [
    41946,
    {
      key: "ERROR_HIGH_4_AA23_BE5",
    },
  ],
  [
    41947,
    {
      key: "ERROR_HIGH_3_AA23_BE5",
    },
  ],
  [
    41948,
    {
      key: "ERROR_HIGH_2_AA23_BE5",
    },
  ],
  [
    41949,
    {
      key: "ERROR_HIGH_1_AA23_BE5",
    },
  ],
  [
    41950,
    {
      key: "ERROR_LOW_10_AA23_BE5",
    },
  ],
  [
    41951,
    {
      key: "ERROR_LOW_9_AA23_BE5",
    },
  ],
  [
    41952,
    {
      key: "ERROR_LOW_8_AA23_BE5",
    },
  ],
  [
    41953,
    {
      key: "ERROR_LOW_7_AA23_BE5",
    },
  ],
  [
    41954,
    {
      key: "ERROR_LOW_6_AA23_BE5",
    },
  ],
  [
    41955,
    {
      key: "ERROR_LOW_5_AA23_BE5",
    },
  ],
  [
    41956,
    {
      key: "ERROR_LOW_4_AA23_BE5",
    },
  ],
  [
    41957,
    {
      key: "ERROR_LOW_3_AA23_BE5",
    },
  ],
  [
    41958,
    {
      key: "ERROR_LOW_2_AA23_BE5",
    },
  ],
  [
    41959,
    {
      key: "ERROR_LOW_1_AA23_BE5",
    },
  ],
  [
    41960,
    {
      key: "COM_PERCENTAGE_10_AA23_BE5",
    },
  ],
  [
    41961,
    {
      key: "COM_PERCENTAGE_9_AA23_BE5",
    },
  ],
  [
    41962,
    {
      key: "COM_PERCENTAGE_8_AA23_BE5",
    },
  ],
  [
    41963,
    {
      key: "COM_PERCENTAGE_7_AA23_BE5",
    },
  ],
  [
    41964,
    {
      key: "COM_PERCENTAGE_6_AA23_BE5",
    },
  ],
  [
    41965,
    {
      key: "COM_PERCENTAGE_5_AA23_BE5",
    },
  ],
  [
    41966,
    {
      key: "COM_PERCENTAGE_4_AA23_BE5",
    },
  ],
  [
    41967,
    {
      key: "COM_PERCENTAGE_3_AA23_BE5",
    },
  ],
  [
    41968,
    {
      key: "COM_PERCENTAGE_2_AA23_BE5",
    },
  ],
  [
    41969,
    {
      key: "COM_PERCENTAGE_1_AA23_BE5",
    },
  ],
  [
    41970,
    {
      key: "MAX_COM_PERCENTAGE_10_AA23_BE5",
    },
  ],
  [
    41971,
    {
      key: "MAX_COM_PERCENTAGE_9_AA23_BE5",
    },
  ],
  [
    41972,
    {
      key: "MAX_COM_PERCENTAGE_8_AA23_BE5",
    },
  ],
  [
    41973,
    {
      key: "MAX_COM_PERCENTAGE_7_AA23_BE5",
    },
  ],
  [
    41974,
    {
      key: "MAX_COM_PERCENTAGE_6_AA23_BE5",
    },
  ],
  [
    41975,
    {
      key: "MAX_COM_PERCENTAGE_5_AA23_BE5",
    },
  ],
  [
    41976,
    {
      key: "MAX_COM_PERCENTAGE_4_AA23_BE5",
    },
  ],
  [
    41977,
    {
      key: "MAX_COM_PERCENTAGE_3_AA23_BE5",
    },
  ],
  [
    41978,
    {
      key: "MAX_COM_PERCENTAGE_2_AA23_BE5",
    },
  ],
  [
    41979,
    {
      key: "MAX_COM_PERCENTAGE_1_AA23_BE5",
    },
  ],
  [
    41980,
    {
      key: "VOLTAGE1_10_AA23_BE5",
    },
  ],
  [
    41981,
    {
      key: "VOLTAGE1_9_AA23_BE5",
    },
  ],
  [
    41982,
    {
      key: "VOLTAGE1_8_AA23_BE5",
    },
  ],
  [
    41983,
    {
      key: "VOLTAGE1_7_AA23_BE5",
    },
  ],
  [
    41984,
    {
      key: "VOLTAGE1_6_AA23_BE5",
    },
  ],
  [
    41985,
    {
      key: "VOLTAGE1_5_AA23_BE5",
    },
  ],
  [
    41986,
    {
      key: "VOLTAGE1_4_AA23_BE5",
    },
  ],
  [
    41987,
    {
      key: "VOLTAGE1_3_AA23_BE5",
    },
  ],
  [
    41988,
    {
      key: "VOLTAGE1_2_AA23_BE5",
    },
  ],
  [
    41989,
    {
      key: "VOLTAGE1_1_AA23_BE5",
    },
  ],
  [
    41990,
    {
      key: "VOLTAGE2_10_AA23_BE5",
    },
  ],
  [
    41991,
    {
      key: "VOLTAGE2_9_AA23_BE5",
    },
  ],
  [
    41992,
    {
      key: "VOLTAGE2_8_AA23_BE5",
    },
  ],
  [
    41993,
    {
      key: "VOLTAGE2_7_AA23_BE5",
    },
  ],
  [
    41994,
    {
      key: "VOLTAGE2_6_AA23_BE5",
    },
  ],
  [
    41995,
    {
      key: "VOLTAGE2_5_AA23_BE5",
    },
  ],
  [
    41996,
    {
      key: "VOLTAGE2_4_AA23_BE5",
    },
  ],
  [
    41997,
    {
      key: "VOLTAGE2_3_AA23_BE5",
    },
  ],
  [
    41998,
    {
      key: "VOLTAGE2_2_AA23_BE5",
    },
  ],
  [
    41999,
    {
      key: "VOLTAGE2_1_AA23_BE5",
    },
  ],
  [
    42000,
    {
      key: "TEMPERATURE_10_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42001,
    {
      key: "TEMPERATURE_9_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42002,
    {
      key: "TEMPERATURE_8_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42003,
    {
      key: "TEMPERATURE_7_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42004,
    {
      key: "TEMPERATURE_6_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42005,
    {
      key: "TEMPERATURE_5_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42006,
    {
      key: "TEMPERATURE_4_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42007,
    {
      key: "TEMPERATURE_3_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42008,
    {
      key: "TEMPERATURE_2_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42009,
    {
      key: "TEMPERATURE_1_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42010,
    {
      key: "ENERGY_10_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42012,
    {
      key: "ENERGY_9_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42014,
    {
      key: "ENERGY_8_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42016,
    {
      key: "ENERGY_7_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42018,
    {
      key: "ENERGY_6_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42020,
    {
      key: "ENERGY_5_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42022,
    {
      key: "ENERGY_4_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42024,
    {
      key: "ENERGY_3_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42026,
    {
      key: "ENERGY_2_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42028,
    {
      key: "ENERGY_1_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42030,
    {
      key: "VERSION_AA23_BE5",
    },
  ],
  [
    42031,
    {
      key: "POWER_AA20_BE5",
    },
  ],
  [
    42032,
    {
      key: "AVERAGE_OUTPUT_AA20_BE5",
    },
  ],
  [
    42033,
    {
      key: "PV_PANEL_HEAT_OFFSET",
      divideBy: 10,
    },
  ],
  [
    42034,
    {
      key: "PV_PANEL_POOL_OFFSET",
      divideBy: 10,
    },
  ],
  [
    42035,
    {
      key: "POWER_AA23_BE5",
    },
  ],
  [
    42037,
    {
      key: "AVERAGE_OUTPUT_AA23_BE5",
    },
  ],
  [
    42039,
    {
      key: "_EB108",
    },
  ],
  [
    42041,
    {
      key: "_EB108",
    },
  ],
  [
    42043,
    {
      key: "_EB107",
    },
  ],
  [
    42045,
    {
      key: "_EB107",
    },
  ],
  [
    42047,
    {
      key: "_EB106",
    },
  ],
  [
    42049,
    {
      key: "_EB106",
    },
  ],
  [
    42051,
    {
      key: "_EB105",
    },
  ],
  [
    42053,
    {
      key: "_EB105",
    },
  ],
  [
    42055,
    {
      key: "_EB104",
    },
  ],
  [
    42057,
    {
      key: "_EB104",
    },
  ],
  [
    42059,
    {
      key: "_EB103",
    },
  ],
  [
    42061,
    {
      key: "_EB103",
    },
  ],
  [
    42063,
    {
      key: "_EB102",
    },
  ],
  [
    42065,
    {
      key: "_EB102",
    },
  ],
  [
    42067,
    {
      key: "_EB101",
    },
  ],
  [
    42069,
    {
      key: "_EB101",
    },
  ],
  [
    42075,
    {
      key: "PRODUCED_ELECTRICITY_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42077,
    {
      key: "STATUS_FOR_COMPRESSOR_HEATER_EP15",
    },
  ],
  [
    42078,
    {
      key: "STATUS_FOR_COMPRESSOR_HEATER_EP14",
    },
  ],
  [
    42079,
    {
      key: "COM_FAILURE_EME20",
    },
  ],
  [
    42080,
    {
      key: "ALARM_504_AA23_BE5",
    },
  ],
  [
    42081,
    {
      key: "ALARM_505_AA23_BE5",
    },
  ],
  [
    42082,
    {
      key: "ALARM_506_AA23_BE5",
    },
  ],
  [
    42083,
    {
      key: "ALARM_507_AA23_BE5",
    },
  ],
  [
    42084,
    {
      key: "ALARM_508_AA23_BE5",
    },
  ],
  [
    42085,
    {
      key: "ALARM_509_AA23_BE5",
    },
  ],
  [
    42086,
    {
      key: "ALARM_510_AA23_BE5",
    },
  ],
  [
    42087,
    {
      key: "ALARM_511_AA23_BE5",
    },
  ],
  [
    42093,
    {
      key: "EXTERNAL_SAM_ACCESSORYSPEED_GQ3",
    },
  ],
  [
    42094,
    {
      key: "COMPRESSOR_RUNNING_TIME_MODULE_0",
    },
  ],
  [
    42096,
    {
      key: "SUPPLY_FAN_REAL_SPEED",
    },
  ],
  [
    42097,
    {
      key: "GROUND_WATER_PUMP_AUTO_SPEED",
    },
  ],
  [
    42100,
    {
      key: "AVERAGE_24H_BT1",
      divideBy: 10,
    },
  ],
  [
    42101,
    {
      key: "USED_HEATING_POWER_AVERAGE_24H",
      divideBy: 10,
    },
  ],
  [
    42102,
    {
      key: "PV_PANEL_MAX_COMPRESSOR_POWER",
    },
  ],
  [
    42103,
    {
      key: "SMART_CONTROL_SMART_PRICE_ADAPTION_HOUR_FOR_PERIODIC_INC",
    },
  ],
  [
    42108,
    {
      key: "ESTIMATED_POWER_CONSUMPTION_AT_DUT",
    },
  ],
  [
    42110,
    {
      key: "W1",
    },
  ],
  [
    42112,
    {
      key: "W2",
    },
  ],
  [
    42114,
    {
      key: "P11",
    },
  ],
  [
    42116,
    {
      key: "P12",
    },
  ],
  [
    42118,
    {
      key: "P21",
    },
  ],
  [
    42120,
    {
      key: "P22",
    },
  ],
  [
    42122,
    {
      key: "PXV1",
    },
  ],
  [
    42124,
    {
      key: "PXV2",
    },
  ],
  [
    42126,
    {
      key: "PV",
    },
  ],
  [
    42136,
    {
      key: "SUPPLY_AIR_BT22",
      divideBy: 10,
    },
  ],
  [
    42137,
    {
      key: "SUPPLY_AIR_BT22",
      divideBy: 10,
    },
  ],
  [
    42138,
    {
      key: "SUPPLY_AIR_BT22",
      divideBy: 10,
    },
  ],
  [
    42139,
    {
      key: "OUTDOOR_TEMP_BT23",
      divideBy: 10,
    },
  ],
  [
    42140,
    {
      key: "OUTDOOR_TEMP_BT23",
      divideBy: 10,
    },
  ],
  [
    42141,
    {
      key: "OUTDOOR_TEMP_BT23",
      divideBy: 10,
    },
  ],
  [
    42150,
    {
      key: "EXTERNAL_ERS_4_ACCESSORY_RELAYS",
    },
  ],
  [
    42151,
    {
      key: "EXTERNAL_ERS_3_ACCESSORY_RELAYS",
    },
  ],
  [
    42152,
    {
      key: "EXTERNAL_ERS_2_ACCESSORY_RELAYS",
    },
  ],
  [
    42153,
    {
      key: "FAN_SPEED_GQ2",
    },
  ],
  [
    42154,
    {
      key: "FAN_SPEED_GQ2",
    },
  ],
  [
    42155,
    {
      key: "FAN_SPEED_GQ2",
    },
  ],
  [
    42156,
    {
      key: "FAN_SPEED_GQ3",
    },
  ],
  [
    42157,
    {
      key: "FAN_SPEED_GQ3",
    },
  ],
  [
    42158,
    {
      key: "FAN_SPEED_GQ3",
    },
  ],
  [
    42159,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    42160,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    42161,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    42162,
    {
      key: "EXTERNAL_ERS_4_ACCESSORY_EB17",
    },
  ],
  [
    42163,
    {
      key: "EXTERNAL_ERS_3_ACCESSORY_EB17",
    },
  ],
  [
    42164,
    {
      key: "EXTERNAL_ERS_2_ACCESSORY_EB17",
    },
  ],
  [
    42165,
    {
      key: "EB108_EP15_FAN_HEATER_STATUS",
    },
  ],
  [
    42166,
    {
      key: "HEAT_METER_POOL2_CPR_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    42168,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    42170,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    42172,
    {
      key: "HEAT_METER_COOLING_CPR_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    42174,
    {
      key: "HEAT_METER_POOL_CPR_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    42176,
    {
      key: "HEAT_METER_HW_CPR_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    42178,
    {
      key: "HEAT_METER_HEAT_CPR_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    42180,
    {
      key: "EB108_EP14_FAN_HEATER_STATUS",
    },
  ],
  [
    42181,
    {
      key: "HEAT_METER_POOL2_CPR_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    42183,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    42185,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    42187,
    {
      key: "HEAT_METER_COOLING_CPR_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    42189,
    {
      key: "HEAT_METER_POOL_CPR_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    42191,
    {
      key: "HEAT_METER_HW_CPR_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    42193,
    {
      key: "HEAT_METER_HEAT_CPR_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    42195,
    {
      key: "EB107_EP15_FAN_HEATER_STATUS",
    },
  ],
  [
    42196,
    {
      key: "HEAT_METER_POOL2_CPR_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    42198,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    42200,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    42202,
    {
      key: "HEAT_METER_COOLING_CPR_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    42204,
    {
      key: "HEAT_METER_POOL_CPR_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    42206,
    {
      key: "HEAT_METER_HW_CPR_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    42208,
    {
      key: "HEAT_METER_HEAT_CPR_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    42210,
    {
      key: "EB107_EP14_FAN_HEATER_STATUS",
    },
  ],
  [
    42211,
    {
      key: "HEAT_METER_POOL2_CPR_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    42213,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    42215,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    42217,
    {
      key: "HEAT_METER_COOLING_CPR_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    42219,
    {
      key: "HEAT_METER_POOL_CPR_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    42221,
    {
      key: "HEAT_METER_HW_CPR_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    42223,
    {
      key: "HEAT_METER_HEAT_CPR_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    42225,
    {
      key: "EB106_EP15_FAN_HEATER_STATUS",
    },
  ],
  [
    42226,
    {
      key: "HEAT_METER_POOL2_CPR_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    42228,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    42230,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    42232,
    {
      key: "HEAT_METER_COOLING_CPR_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    42234,
    {
      key: "HEAT_METER_POOL_CPR_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    42236,
    {
      key: "HEAT_METER_HW_CPR_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    42238,
    {
      key: "HEAT_METER_HEAT_CPR_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    42240,
    {
      key: "EB106_EP14_FAN_HEATER_STATUS",
    },
  ],
  [
    42241,
    {
      key: "HEAT_METER_POOL2_CPR_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    42243,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    42245,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    42247,
    {
      key: "HEAT_METER_COOLING_CPR_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    42249,
    {
      key: "HEAT_METER_POOL_CPR_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    42251,
    {
      key: "HEAT_METER_HW_CPR_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    42253,
    {
      key: "HEAT_METER_HEAT_CPR_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    42255,
    {
      key: "EB105_EP15_FAN_HEATER_STATUS",
    },
  ],
  [
    42256,
    {
      key: "HEAT_METER_POOL2_CPR_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    42258,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    42260,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    42262,
    {
      key: "HEAT_METER_COOLING_CPR_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    42264,
    {
      key: "HEAT_METER_POOL_CPR_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    42266,
    {
      key: "HEAT_METER_HW_CPR_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    42268,
    {
      key: "HEAT_METER_HEAT_CPR_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    42270,
    {
      key: "EB105_EP14_FAN_HEATER_STATUS",
    },
  ],
  [
    42271,
    {
      key: "HEAT_METER_POOL2_CPR_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    42273,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    42275,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    42277,
    {
      key: "HEAT_METER_COOLING_CPR_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    42279,
    {
      key: "HEAT_METER_POOL_CPR_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    42281,
    {
      key: "HEAT_METER_HW_CPR_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    42283,
    {
      key: "HEAT_METER_HEAT_CPR_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    42285,
    {
      key: "EB104_EP15_FAN_HEATER_STATUS",
    },
  ],
  [
    42286,
    {
      key: "HEAT_METER_POOL2_CPR_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    42288,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    42290,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    42292,
    {
      key: "HEAT_METER_COOLING_CPR_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    42294,
    {
      key: "HEAT_METER_POOL_CPR_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    42296,
    {
      key: "HEAT_METER_HW_CPR_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    42298,
    {
      key: "HEAT_METER_HEAT_CPR_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    42300,
    {
      key: "EB104_EP14_FAN_HEATER_STATUS",
    },
  ],
  [
    42301,
    {
      key: "HEAT_METER_POOL2_CPR_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    42303,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    42305,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    42307,
    {
      key: "HEAT_METER_COOLING_CPR_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    42309,
    {
      key: "HEAT_METER_POOL_CPR_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    42311,
    {
      key: "HEAT_METER_HW_CPR_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    42313,
    {
      key: "HEAT_METER_HEAT_CPR_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    42315,
    {
      key: "EB103_EP15_FAN_HEATER_STATUS",
    },
  ],
  [
    42316,
    {
      key: "HEAT_METER_POOL2_CPR_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    42318,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    42320,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    42322,
    {
      key: "HEAT_METER_COOLING_CPR_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    42324,
    {
      key: "HEAT_METER_POOL_CPR_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    42326,
    {
      key: "HEAT_METER_HW_CPR_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    42328,
    {
      key: "HEAT_METER_HEAT_CPR_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    42330,
    {
      key: "EB103_EP14_FAN_HEATER_STATUS",
    },
  ],
  [
    42331,
    {
      key: "HEAT_METER_POOL2_CPR_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    42333,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    42335,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    42337,
    {
      key: "HEAT_METER_COOLING_CPR_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    42339,
    {
      key: "HEAT_METER_POOL_CPR_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    42341,
    {
      key: "HEAT_METER_HW_CPR_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    42343,
    {
      key: "HEAT_METER_HEAT_CPR_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    42345,
    {
      key: "EB102_EP15_FAN_HEATER_STATUS",
    },
  ],
  [
    42346,
    {
      key: "HEAT_METER_POOL2_CPR_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    42348,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    42350,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    42352,
    {
      key: "HEAT_METER_COOLING_CPR_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    42354,
    {
      key: "HEAT_METER_POOL_CPR_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    42356,
    {
      key: "HEAT_METER_HW_CPR_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    42358,
    {
      key: "HEAT_METER_HEAT_CPR_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    42360,
    {
      key: "EB102_EP14_FAN_HEATER_STATUS",
    },
  ],
  [
    42361,
    {
      key: "HEAT_METER_POOL2_CPR_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    42363,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    42365,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    42367,
    {
      key: "HEAT_METER_COOLING_CPR_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    42369,
    {
      key: "HEAT_METER_POOL_CPR_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    42371,
    {
      key: "HEAT_METER_HW_CPR_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    42373,
    {
      key: "HEAT_METER_HEAT_CPR_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    42375,
    {
      key: "EB101_EP15_FAN_HEATER_STATUS",
    },
  ],
  [
    42376,
    {
      key: "HEAT_METER_POOL2_CPR_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    42378,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    42380,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    42382,
    {
      key: "HEAT_METER_COOLING_CPR_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    42384,
    {
      key: "HEAT_METER_POOL_CPR_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    42386,
    {
      key: "HEAT_METER_HW_CPR_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    42388,
    {
      key: "HEAT_METER_HEAT_CPR_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    42390,
    {
      key: "EB101_EP14_FAN_HEATER_STATUS",
    },
  ],
  [
    42391,
    {
      key: "HEAT_METER_POOL2_CPR_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    42393,
    {
      key: "HEAT_METER_HW_CPR_AND_ADD_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    42395,
    {
      key: "HEAT_METER_HEAT_CPR_AND_ADD_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    42397,
    {
      key: "HEAT_METER_COOLING_CPR_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    42399,
    {
      key: "HEAT_METER_POOL_CPR_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    42401,
    {
      key: "HEAT_METER_HW_CPR_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    42403,
    {
      key: "HEAT_METER_HEAT_CPR_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    42435,
    {
      key: "POOL2_COMPR_ONLY",
      divideBy: 10,
    },
  ],
  [
    42437,
    {
      key: "HW_INCL_INT_ADD",
      divideBy: 10,
    },
  ],
  [
    42439,
    {
      key: "HEATING_INT_ADD_INCL",
      divideBy: 10,
    },
  ],
  [
    42441,
    {
      key: "COOLING_COMPR_ONLY",
      divideBy: 10,
    },
  ],
  [
    42443,
    {
      key: "POOL_COMPR_ONLY",
      divideBy: 10,
    },
  ],
  [
    42445,
    {
      key: "HOTWATER_COMPR_ONLY",
      divideBy: 10,
    },
  ],
  [
    42447,
    {
      key: "HEATING_COMPR_ONLY",
      divideBy: 10,
    },
  ],
  [
    42449,
    {
      key: "COM_FAILURE_ERS",
    },
  ],
  [
    42450,
    {
      key: "COM_FAILURE_ERS",
    },
  ],
  [
    42451,
    {
      key: "COM_FAILURE_ERS",
    },
  ],
  [
    42464,
    {
      key: "EXTERNAL_ERS_4_FIRE_PLACE_GUARD",
    },
  ],
  [
    42465,
    {
      key: "EXTERNAL_ERS_3_FIRE_PLACE_GUARD",
    },
  ],
  [
    42466,
    {
      key: "EXTERNAL_ERS_2_FIRE_PLACE_GUARD",
    },
  ],
  [
    42467,
    {
      key: "EXTERNAL_ERS_1_FIRE_PLACE_GUARD",
    },
  ],
  [
    42468,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY_EB108",
      divideBy: 10,
    },
  ],
  [
    42470,
    {
      key: "EXTERNAL_ENERGY_METER_1_ACCUMULATED_ENERGY_EB108",
      divideBy: 10,
    },
  ],
  [
    42472,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY_EB107",
      divideBy: 10,
    },
  ],
  [
    42474,
    {
      key: "EXTERNAL_ENERGY_METER_1_ACCUMULATED_ENERGY_EB107",
      divideBy: 10,
    },
  ],
  [
    42476,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY_EB106",
      divideBy: 10,
    },
  ],
  [
    42478,
    {
      key: "EXTERNAL_ENERGY_METER_1_ACCUMULATED_ENERGY_EB106",
      divideBy: 10,
    },
  ],
  [
    42480,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY_EB105",
      divideBy: 10,
    },
  ],
  [
    42482,
    {
      key: "EXTERNAL_ENERGY_METER_1_ACCUMULATED_ENERGY_EB105",
      divideBy: 10,
    },
  ],
  [
    42484,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY_EB104",
      divideBy: 10,
    },
  ],
  [
    42486,
    {
      key: "EXTERNAL_ENERGY_METER_1_ACCUMULATED_ENERGY_EB104",
      divideBy: 10,
    },
  ],
  [
    42488,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY_EB103",
      divideBy: 10,
    },
  ],
  [
    42490,
    {
      key: "EXTERNAL_ENERGY_METER_1_ACCUMULATED_ENERGY_EB103",
      divideBy: 10,
    },
  ],
  [
    42492,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY_EB102",
      divideBy: 10,
    },
  ],
  [
    42494,
    {
      key: "EXTERNAL_ENERGY_METER_1_ACCUMULATED_ENERGY_EB102",
      divideBy: 10,
    },
  ],
  [
    42496,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY_EB101",
      divideBy: 10,
    },
  ],
  [
    42498,
    {
      key: "EXTERNAL_ENERGY_METER_1_ACCUMULATED_ENERGY_EB101",
      divideBy: 10,
    },
  ],
  [
    42504,
    {
      key: "HEATING_COMPR_ONLY",
      divideBy: 10,
    },
  ],
  [
    42508,
    {
      key: "AIR_OUT_EB108_EP15_BT87",
      divideBy: 10,
    },
  ],
  [
    42509,
    {
      key: "F2400_COMPRESSOR_NEED_EB108_EP15",
    },
  ],
  [
    42510,
    {
      key: "AIR_OUT_EB108_EP14_BT87",
      divideBy: 10,
    },
  ],
  [
    42511,
    {
      key: "F2400_COMPRESSOR_NEED_EB108_EP14",
    },
  ],
  [
    42512,
    {
      key: "INVERTER_FAULT_CODE_1_EB108",
    },
  ],
  [
    42513,
    {
      key: "INVERTER_FAULT_CODE_2_EB108",
    },
  ],
  [
    42514,
    {
      key: "INVERTER_DRIVER_STATE_EB108",
    },
  ],
  [
    42515,
    {
      key: "INVERTER_SOFTWARE_PIC_VERSION_EB108",
    },
  ],
  [
    42516,
    {
      key: "INVERTER_SOFTWARE_8051_VERSION_EB108",
    },
  ],
  [
    42517,
    {
      key: "INVERTER_HARDWARE_VERSION_EB108",
    },
  ],
  [
    42518,
    {
      key: "F2120_STATUS_REG_1_EB108",
    },
  ],
  [
    42519,
    {
      key: "AIR_OUT_EB107_EP15_BT87",
      divideBy: 10,
    },
  ],
  [
    42520,
    {
      key: "F2400_COMPRESSOR_NEED_EB107_EP15",
    },
  ],
  [
    42521,
    {
      key: "AIR_OUT_EB107_EP14_BT87",
      divideBy: 10,
    },
  ],
  [
    42522,
    {
      key: "F2400_COMPRESSOR_NEED_EB107_EP14",
    },
  ],
  [
    42523,
    {
      key: "INVERTER_FAULT_CODE_1_EB107",
    },
  ],
  [
    42524,
    {
      key: "INVERTER_FAULT_CODE_2_EB107",
    },
  ],
  [
    42525,
    {
      key: "INVERTER_DRIVER_STATE_EB107",
    },
  ],
  [
    42526,
    {
      key: "INVERTER_SOFTWARE_PIC_VERSION_EB107",
    },
  ],
  [
    42527,
    {
      key: "INVERTER_SOFTWARE_8051_VERSION_EB107",
    },
  ],
  [
    42528,
    {
      key: "INVERTER_HARDWARE_VERSION_EB107",
    },
  ],
  [
    42529,
    {
      key: "F2120_STATUS_REG_1_EB107",
    },
  ],
  [
    42530,
    {
      key: "AIR_OUT_EB106_EP15_BT87",
      divideBy: 10,
    },
  ],
  [
    42531,
    {
      key: "F2400_COMPRESSOR_NEED_EB106_EP15",
    },
  ],
  [
    42532,
    {
      key: "AIR_OUT_EB106_EP14_BT87",
      divideBy: 10,
    },
  ],
  [
    42533,
    {
      key: "F2400_COMPRESSOR_NEED_EB106_EP14",
    },
  ],
  [
    42534,
    {
      key: "INVERTER_FAULT_CODE_1_EB106",
    },
  ],
  [
    42535,
    {
      key: "INVERTER_FAULT_CODE_2_EB106",
    },
  ],
  [
    42536,
    {
      key: "INVERTER_DRIVER_STATE_EB106",
    },
  ],
  [
    42537,
    {
      key: "INVERTER_SOFTWARE_PIC_VERSION_EB106",
    },
  ],
  [
    42538,
    {
      key: "INVERTER_SOFTWARE_8051_VERSION_EB106",
    },
  ],
  [
    42539,
    {
      key: "INVERTER_HARDWARE_VERSION_EB106",
    },
  ],
  [
    42540,
    {
      key: "F2120_STATUS_REG_1_EB106",
    },
  ],
  [
    42541,
    {
      key: "AIR_OUT_EB105_EP15_BT87",
      divideBy: 10,
    },
  ],
  [
    42542,
    {
      key: "F2400_COMPRESSOR_NEED_EB105_EP15",
    },
  ],
  [
    42543,
    {
      key: "AIR_OUT_EB105_EP14_BT87",
      divideBy: 10,
    },
  ],
  [
    42544,
    {
      key: "F2400_COMPRESSOR_NEED_EB105_EP14",
    },
  ],
  [
    42545,
    {
      key: "INVERTER_FAULT_CODE_1_EB105",
    },
  ],
  [
    42546,
    {
      key: "INVERTER_FAULT_CODE_2_EB105",
    },
  ],
  [
    42547,
    {
      key: "INVERTER_DRIVER_STATE_EB105",
    },
  ],
  [
    42548,
    {
      key: "INVERTER_SOFTWARE_PIC_VERSION_EB105",
    },
  ],
  [
    42549,
    {
      key: "INVERTER_SOFTWARE_8051_VERSION_EB105",
    },
  ],
  [
    42550,
    {
      key: "INVERTER_HARDWARE_VERSION_EB105",
    },
  ],
  [
    42551,
    {
      key: "F2120_STATUS_REG_1_EB105",
    },
  ],
  [
    42552,
    {
      key: "AIR_OUT_EB104_EP15_BT87",
      divideBy: 10,
    },
  ],
  [
    42553,
    {
      key: "F2400_COMPRESSOR_NEED_EB104_EP15",
    },
  ],
  [
    42554,
    {
      key: "AIR_OUT_EB104_EP14_BT87",
      divideBy: 10,
    },
  ],
  [
    42555,
    {
      key: "F2400_COMPRESSOR_NEED_EB104_EP14",
    },
  ],
  [
    42556,
    {
      key: "INVERTER_FAULT_CODE_1_EB104",
    },
  ],
  [
    42557,
    {
      key: "INVERTER_FAULT_CODE_2_EB104",
    },
  ],
  [
    42558,
    {
      key: "INVERTER_DRIVER_STATE_EB104",
    },
  ],
  [
    42559,
    {
      key: "INVERTER_SOFTWARE_PIC_VERSION_EB104",
    },
  ],
  [
    42560,
    {
      key: "INVERTER_SOFTWARE_8051_VERSION_EB104",
    },
  ],
  [
    42561,
    {
      key: "INVERTER_HARDWARE_VERSION_EB104",
    },
  ],
  [
    42562,
    {
      key: "F2120_STATUS_REG_1_EB104",
    },
  ],
  [
    42563,
    {
      key: "AIR_OUT_EB103_EP15_BT87",
      divideBy: 10,
    },
  ],
  [
    42564,
    {
      key: "F2400_COMPRESSOR_NEED_EB103_EP15",
    },
  ],
  [
    42565,
    {
      key: "AIR_OUT_EB103_EP14_BT87",
      divideBy: 10,
    },
  ],
  [
    42566,
    {
      key: "F2400_COMPRESSOR_NEED_EB103_EP14",
    },
  ],
  [
    42567,
    {
      key: "INVERTER_FAULT_CODE_1_EB103",
    },
  ],
  [
    42568,
    {
      key: "INVERTER_FAULT_CODE_2_EB103",
    },
  ],
  [
    42569,
    {
      key: "INVERTER_DRIVER_STATE_EB103",
    },
  ],
  [
    42570,
    {
      key: "INVERTER_SOFTWARE_PIC_VERSION_EB103",
    },
  ],
  [
    42571,
    {
      key: "INVERTER_SOFTWARE_8051_VERSION_EB103",
    },
  ],
  [
    42572,
    {
      key: "INVERTER_HARDWARE_VERSION_EB103",
    },
  ],
  [
    42573,
    {
      key: "F2120_STATUS_REG_1_EB103",
    },
  ],
  [
    42574,
    {
      key: "AIR_OUT_EB102_EP15_BT87",
      divideBy: 10,
    },
  ],
  [
    42575,
    {
      key: "F2400_COMPRESSOR_NEED_EB102_EP15",
    },
  ],
  [
    42576,
    {
      key: "AIR_OUT_EB102_EP14_BT87",
      divideBy: 10,
    },
  ],
  [
    42577,
    {
      key: "F2400_COMPRESSOR_NEED_EB102_EP14",
    },
  ],
  [
    42578,
    {
      key: "INVERTER_FAULT_CODE_1_EB102",
    },
  ],
  [
    42579,
    {
      key: "INVERTER_FAULT_CODE_2_EB102",
    },
  ],
  [
    42580,
    {
      key: "INVERTER_DRIVER_STATE_EB102",
    },
  ],
  [
    42581,
    {
      key: "INVERTER_SOFTWARE_PIC_VERSION_EB102",
    },
  ],
  [
    42582,
    {
      key: "INVERTER_SOFTWARE_8051_VERSION_EB102",
    },
  ],
  [
    42583,
    {
      key: "INVERTER_HARDWARE_VERSION_EB102",
    },
  ],
  [
    42584,
    {
      key: "F2120_STATUS_REG_1_EB102",
    },
  ],
  [
    42585,
    {
      key: "AIR_OUT_EB101_EP15_BT87",
      divideBy: 10,
    },
  ],
  [
    42586,
    {
      key: "F2400_COMPRESSOR_NEED_EB101_EP15",
    },
  ],
  [
    42587,
    {
      key: "AIR_OUT_EB101_EP14_BT87",
      divideBy: 10,
    },
  ],
  [
    42588,
    {
      key: "F2400_COMPRESSOR_NEED_EB101_EP14",
    },
  ],
  [
    42589,
    {
      key: "INVERTER_FAULT_CODE_1_EB101",
    },
  ],
  [
    42590,
    {
      key: "INVERTER_FAULT_CODE_2_EB101",
    },
  ],
  [
    42591,
    {
      key: "INVERTER_DRIVER_STATE_EB101",
    },
  ],
  [
    42592,
    {
      key: "INVERTER_SOFTWARE_PIC_VERSION_EB101",
    },
  ],
  [
    42593,
    {
      key: "INVERTER_SOFTWARE_8051_VERSION_EB101",
    },
  ],
  [
    42594,
    {
      key: "INVERTER_HARDWARE_VERSION_EB101",
    },
  ],
  [
    42595,
    {
      key: "F2120_STATUS_REG_1_EB101",
    },
  ],
  [
    42607,
    {
      key: "ALARM_INVERTER_OVER_HEATED",
    },
  ],
  [
    42608,
    {
      key: "ALARM_INVERTER_OVER_HEATED_TMP",
    },
  ],
  [
    42609,
    {
      key: "FLOW_BF1",
      divideBy: 10,
    },
  ],
  [
    42610,
    {
      key: "FLOW_BF1",
      divideBy: 10,
    },
  ],
  [
    42620,
    {
      key: "PRESSURE_TRANSMITTER_EB108_EP15_BP9",
    },
  ],
  [
    42621,
    {
      key: "HIGH_PRESSURE_EB108_EP14_BP9",
    },
  ],
  [
    42622,
    {
      key: "F2400_ALARM_NUMBER_EB108",
    },
  ],
  [
    42623,
    {
      key: "PRESSURE_TRANSMITTER_EB107_EP15_BP9",
    },
  ],
  [
    42624,
    {
      key: "HIGH_PRESSURE_EB107_EP14_BP9",
    },
  ],
  [
    42625,
    {
      key: "F2400_ALARM_NUMBER_EB107",
    },
  ],
  [
    42626,
    {
      key: "PRESSURE_TRANSMITTER_EB106_EP15_BP9",
    },
  ],
  [
    42627,
    {
      key: "HIGH_PRESSURE_EB106_EP14_BP9",
    },
  ],
  [
    42628,
    {
      key: "F2400_ALARM_NUMBER_EB106",
    },
  ],
  [
    42629,
    {
      key: "PRESSURE_TRANSMITTER_EB105_EP15_BP9",
    },
  ],
  [
    42630,
    {
      key: "HIGH_PRESSURE_EB105_EP14_BP9",
    },
  ],
  [
    42631,
    {
      key: "F2400_ALARM_NUMBER_EB105",
    },
  ],
  [
    42632,
    {
      key: "PRESSURE_TRANSMITTER_EB104_EP15_BP9",
    },
  ],
  [
    42633,
    {
      key: "HIGH_PRESSURE_EB104_EP14_BP9",
    },
  ],
  [
    42634,
    {
      key: "F2400_ALARM_NUMBER_EB104",
    },
  ],
  [
    42635,
    {
      key: "PRESSURE_TRANSMITTER_EB103_EP15_BP9",
    },
  ],
  [
    42636,
    {
      key: "HIGH_PRESSURE_EB103_EP14_BP9",
    },
  ],
  [
    42637,
    {
      key: "F2400_ALARM_NUMBER_EB103",
    },
  ],
  [
    42638,
    {
      key: "PRESSURE_TRANSMITTER_EB102_EP15_BP9",
    },
  ],
  [
    42639,
    {
      key: "HIGH_PRESSURE_EB102_EP14_BP9",
    },
  ],
  [
    42640,
    {
      key: "F2400_ALARM_NUMBER_EB102",
    },
  ],
  [
    42641,
    {
      key: "PRESSURE_TRANSMITTER_EB101_EP15_BP9",
    },
  ],
  [
    42642,
    {
      key: "HIGH_PRESSURE_EB101_EP14_BP9",
    },
  ],
  [
    42643,
    {
      key: "F2400_ALARM_NUMBER_EB101",
    },
  ],
  [
    42647,
    {
      key: "POWER_10_AA23_BE5",
    },
  ],
  [
    42648,
    {
      key: "POWER_10_AA23_BE5",
    },
  ],
  [
    42649,
    {
      key: "ERROR_HIGH_10_AA23_BE5",
    },
  ],
  [
    42650,
    {
      key: "ERROR_HIGH_10_AA23_BE5",
    },
  ],
  [
    42651,
    {
      key: "ERROR_LOW_10_AA23_BE5",
    },
  ],
  [
    42652,
    {
      key: "ERROR_LOW_10_AA23_BE5",
    },
  ],
  [
    42653,
    {
      key: "COM_PERCENTAGE_10_AA23_BE5",
    },
  ],
  [
    42654,
    {
      key: "COM_PERCENTAGE_10_AA23_BE5",
    },
  ],
  [
    42655,
    {
      key: "MAX_COM_PERCENTAGE_10_AA23_BE5",
    },
  ],
  [
    42656,
    {
      key: "MAX_COM_PERCENTAGE_10_AA23_BE5",
    },
  ],
  [
    42657,
    {
      key: "VOLTAGE1_10_AA23_BE5",
    },
  ],
  [
    42658,
    {
      key: "VOLTAGE1_10_AA23_BE5",
    },
  ],
  [
    42659,
    {
      key: "VOLTAGE2_10_AA23_BE5",
    },
  ],
  [
    42660,
    {
      key: "VOLTAGE2_10_AA23_BE5",
    },
  ],
  [
    42661,
    {
      key: "TEMPERATURE_10_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42662,
    {
      key: "TEMPERATURE_10_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42663,
    {
      key: "ENERGY_10_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42665,
    {
      key: "ENERGY_10_AA23_BE5",
      divideBy: 10,
    },
  ],
  [
    42667,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY",
      divideBy: 10,
    },
  ],
  [
    42669,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY",
      divideBy: 10,
    },
  ],
  [
    42671,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY",
      divideBy: 10,
    },
  ],
  [
    42673,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY",
      divideBy: 10,
    },
  ],
  [
    42675,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY",
      divideBy: 10,
    },
  ],
  [
    42677,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY",
      divideBy: 10,
    },
  ],
  [
    42679,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY",
      divideBy: 10,
    },
  ],
  [
    42681,
    {
      key: "EXTERNAL_ENERGY_METER_2_ACCUMULATED_ENERGY",
      divideBy: 10,
    },
  ],
  [
    42683,
    {
      key: "DOCKED_2_PIPE_COOL_COMPRESSORS",
    },
  ],
  [
    42684,
    {
      key: "GREENMASTER_FAN_CONTROLOPEN_QM41",
    },
  ],
  [
    42685,
    {
      key: "GREENMASTER_FAN_CONTROLCLOSED_QM41",
    },
  ],
  [
    42686,
    {
      key: "GREENMASTER_FAN_CONTROL_FIRE_ALARM",
    },
  ],
  [
    42687,
    {
      key: "PRESS_TRANSM_FAN_BP14",
    },
  ],
  [
    42688,
    {
      key: "PRESS_TRANSM_FILTER_BP13",
    },
  ],
  [
    42689,
    {
      key: "PR_TRANSM_EXTR_AIR_BP12",
    },
  ],
  [
    42690,
    {
      key: "EXHAUST_AIR_BT21",
      divideBy: 10,
    },
  ],
  [
    42691,
    {
      key: "EXTRACT_AIR_BT20",
      divideBy: 10,
    },
  ],
  [
    42692,
    {
      key: "FLOW_SENS_FUNCT_FILT_BF2",
    },
  ],
  [
    42693,
    {
      key: "REL_HUMIDITY",
    },
  ],
  [
    42694,
    {
      key: "REL_HUMIDITY",
    },
  ],
  [
    42695,
    {
      key: "REL_HUMIDITY",
    },
  ],
  [
    42702,
    {
      key: "4_HUMIDITY_BM1",
    },
  ],
  [
    42703,
    {
      key: "ROOM_TEMPERATURE_BM1",
      divideBy: 10,
    },
  ],
  [
    42704,
    {
      key: "AIR_PRESSURE_BM1",
    },
  ],
  [
    42705,
    {
      key: "DEW_POINT_BM1",
      divideBy: 10,
    },
  ],
  [
    42706,
    {
      key: "4_BM1",
    },
  ],
  [
    42707,
    {
      key: "4_BM1",
    },
  ],
  [
    42708,
    {
      key: "4_BM1",
    },
  ],
  [
    42709,
    {
      key: "4_BM1",
    },
  ],
  [
    42710,
    {
      key: "4_BM1",
    },
  ],
  [
    42711,
    {
      key: "4_BM1",
    },
  ],
  [
    42712,
    {
      key: "4_BM1",
    },
  ],
  [
    42713,
    {
      key: "4_BM1",
    },
  ],
  [
    42714,
    {
      key: "4_BM1",
    },
  ],
  [
    42715,
    {
      key: "3_HUMIDITY_BM1",
    },
  ],
  [
    42716,
    {
      key: "ROOM_TEMPERATURE_BM1",
      divideBy: 10,
    },
  ],
  [
    42717,
    {
      key: "AIR_PRESSURE_BM1",
    },
  ],
  [
    42718,
    {
      key: "DEW_POINT_BM1",
      divideBy: 10,
    },
  ],
  [
    42719,
    {
      key: "3_BM1",
    },
  ],
  [
    42720,
    {
      key: "3_BM1",
    },
  ],
  [
    42721,
    {
      key: "3_BM1",
    },
  ],
  [
    42722,
    {
      key: "3_BM1",
    },
  ],
  [
    42723,
    {
      key: "3_BM1",
    },
  ],
  [
    42724,
    {
      key: "3_BM1",
    },
  ],
  [
    42725,
    {
      key: "3_BM1",
    },
  ],
  [
    42726,
    {
      key: "3_BM1",
    },
  ],
  [
    42727,
    {
      key: "3_BM1",
    },
  ],
  [
    42728,
    {
      key: "2_HUMIDITY_BM1",
    },
  ],
  [
    42729,
    {
      key: "ROOM_TEMPERATURE_BM1",
      divideBy: 10,
    },
  ],
  [
    42730,
    {
      key: "AIR_PRESSURE_BM1",
    },
  ],
  [
    42731,
    {
      key: "DEW_POINT_BM1",
      divideBy: 10,
    },
  ],
  [
    42732,
    {
      key: "2_BM1",
    },
  ],
  [
    42733,
    {
      key: "2_BM1",
    },
  ],
  [
    42734,
    {
      key: "2_BM1",
    },
  ],
  [
    42735,
    {
      key: "2_BM1",
    },
  ],
  [
    42736,
    {
      key: "2_BM1",
    },
  ],
  [
    42737,
    {
      key: "2_BM1",
    },
  ],
  [
    42738,
    {
      key: "2_BM1",
    },
  ],
  [
    42739,
    {
      key: "2_BM1",
    },
  ],
  [
    42740,
    {
      key: "2_BM1",
    },
  ],
  [
    42742,
    {
      key: "COM_FAILURE_HTS",
    },
  ],
  [
    42743,
    {
      key: "COM_FAILURE_HTS",
    },
  ],
  [
    42744,
    {
      key: "COM_FAILURE_HTS",
    },
  ],
  [
    42745,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_530",
    },
  ],
  [
    42746,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_531",
    },
  ],
  [
    42747,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_532",
    },
  ],
  [
    42748,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_533",
    },
  ],
  [
    42749,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_534",
    },
  ],
  [
    42750,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_535",
    },
  ],
  [
    42751,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_536",
    },
  ],
  [
    42752,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_537",
    },
  ],
  [
    42753,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_538",
    },
  ],
  [
    42754,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_539",
    },
  ],
  [
    42755,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_540",
    },
  ],
  [
    42756,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_541",
    },
  ],
  [
    42757,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_542",
    },
  ],
  [
    42758,
    {
      key: "GREENMASTER_FAN_CONTROL_ALARM_543",
    },
  ],
  [
    42759,
    {
      key: "HUMIDITY_AVERAGE",
    },
  ],
  [
    42760,
    {
      key: "HUMIDITY_AVERAGE",
    },
  ],
  [
    42761,
    {
      key: "HUMIDITY_AVERAGE",
    },
  ],
  [
    42762,
    {
      key: "AVERAGE_RH",
    },
  ],
  [
    42763,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_STATE_FOR_FAN_4",
    },
  ],
  [
    42764,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_STATE_FOR_FAN_3",
    },
  ],
  [
    42765,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_STATE_FOR_FAN_2",
    },
  ],
  [
    42766,
    {
      key: "FAN_EFFECT",
    },
  ],
  [
    42767,
    {
      key: "FAN_SPEED",
    },
  ],
  [
    42768,
    {
      key: "FAN_SPEED",
    },
  ],
  [
    42769,
    {
      key: "FAN_SPEED",
    },
  ],
  [
    42770,
    {
      key: "FAN_SPEED",
    },
  ],
  [
    42782,
    {
      key: "EB100_ADJUSTEDAIR_FLOW_BS1",
    },
  ],
  [
    42783,
    {
      key: "EEVM_CALIBRATION_POINT_EB108",
    },
  ],
  [
    42784,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB108",
    },
  ],
  [
    42785,
    {
      key: "EEVM_CALIBRATION_POINT_EB108",
    },
  ],
  [
    42786,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB108",
    },
  ],
  [
    42787,
    {
      key: "EEVM_CALIBRATION_POINT_EB108",
    },
  ],
  [
    42788,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB108",
    },
  ],
  [
    42789,
    {
      key: "EEVI_CALIBRATION_POINT_EB108",
    },
  ],
  [
    42790,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB108",
    },
  ],
  [
    42791,
    {
      key: "EEVI_CALIBRATION_POINT_EB108",
    },
  ],
  [
    42792,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB108",
    },
  ],
  [
    42793,
    {
      key: "EEVM_CALIBRATION_RANGE_EB108",
    },
  ],
  [
    42794,
    {
      key: "EEVI_CALIBRATION_RANGE_EB108",
    },
  ],
  [
    42795,
    {
      key: "EEVM_CALIBRATION_POINT_EB107",
    },
  ],
  [
    42796,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB107",
    },
  ],
  [
    42797,
    {
      key: "EEVM_CALIBRATION_POINT_EB107",
    },
  ],
  [
    42798,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB107",
    },
  ],
  [
    42799,
    {
      key: "EEVM_CALIBRATION_POINT_EB107",
    },
  ],
  [
    42800,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB107",
    },
  ],
  [
    42801,
    {
      key: "EEVI_CALIBRATION_POINT_EB107",
    },
  ],
  [
    42802,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB107",
    },
  ],
  [
    42803,
    {
      key: "EEVI_CALIBRATION_POINT_EB107",
    },
  ],
  [
    42804,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB107",
    },
  ],
  [
    42805,
    {
      key: "EEVM_CALIBRATION_RANGE_EB107",
    },
  ],
  [
    42806,
    {
      key: "EEVI_CALIBRATION_RANGE_EB107",
    },
  ],
  [
    42807,
    {
      key: "EEVM_CALIBRATION_POINT_EB106",
    },
  ],
  [
    42808,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB106",
    },
  ],
  [
    42809,
    {
      key: "EEVM_CALIBRATION_POINT_EB106",
    },
  ],
  [
    42810,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB106",
    },
  ],
  [
    42811,
    {
      key: "EEVM_CALIBRATION_POINT_EB106",
    },
  ],
  [
    42812,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB106",
    },
  ],
  [
    42813,
    {
      key: "EEVI_CALIBRATION_POINT_EB106",
    },
  ],
  [
    42814,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB106",
    },
  ],
  [
    42815,
    {
      key: "EEVI_CALIBRATION_POINT_EB106",
    },
  ],
  [
    42816,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB106",
    },
  ],
  [
    42817,
    {
      key: "EEVM_CALIBRATION_RANGE_EB106",
    },
  ],
  [
    42818,
    {
      key: "EEVI_CALIBRATION_RANGE_EB106",
    },
  ],
  [
    42819,
    {
      key: "EEVM_CALIBRATION_POINT_EB105",
    },
  ],
  [
    42820,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB105",
    },
  ],
  [
    42821,
    {
      key: "EEVM_CALIBRATION_POINT_EB105",
    },
  ],
  [
    42822,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB105",
    },
  ],
  [
    42823,
    {
      key: "EEVM_CALIBRATION_POINT_EB105",
    },
  ],
  [
    42824,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB105",
    },
  ],
  [
    42825,
    {
      key: "EEVI_CALIBRATION_POINT_EB105",
    },
  ],
  [
    42826,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB105",
    },
  ],
  [
    42827,
    {
      key: "EEVI_CALIBRATION_POINT_EB105",
    },
  ],
  [
    42828,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB105",
    },
  ],
  [
    42829,
    {
      key: "EEVM_CALIBRATION_RANGE_EB105",
    },
  ],
  [
    42830,
    {
      key: "EEVI_CALIBRATION_RANGE_EB105",
    },
  ],
  [
    42831,
    {
      key: "EEVM_CALIBRATION_POINT_EB104",
    },
  ],
  [
    42832,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB104",
    },
  ],
  [
    42833,
    {
      key: "EEVM_CALIBRATION_POINT_EB104",
    },
  ],
  [
    42834,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB104",
    },
  ],
  [
    42835,
    {
      key: "EEVM_CALIBRATION_POINT_EB104",
    },
  ],
  [
    42836,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB104",
    },
  ],
  [
    42837,
    {
      key: "EEVI_CALIBRATION_POINT_EB104",
    },
  ],
  [
    42838,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB104",
    },
  ],
  [
    42839,
    {
      key: "EEVI_CALIBRATION_POINT_EB104",
    },
  ],
  [
    42840,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB104",
    },
  ],
  [
    42841,
    {
      key: "EEVM_CALIBRATION_RANGE_EB104",
    },
  ],
  [
    42842,
    {
      key: "EEVI_CALIBRATION_RANGE_EB104",
    },
  ],
  [
    42843,
    {
      key: "EEVM_CALIBRATION_POINT_EB103",
    },
  ],
  [
    42844,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB103",
    },
  ],
  [
    42845,
    {
      key: "EEVM_CALIBRATION_POINT_EB103",
    },
  ],
  [
    42846,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB103",
    },
  ],
  [
    42847,
    {
      key: "EEVM_CALIBRATION_POINT_EB103",
    },
  ],
  [
    42848,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB103",
    },
  ],
  [
    42849,
    {
      key: "EEVI_CALIBRATION_POINT_EB103",
    },
  ],
  [
    42850,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB103",
    },
  ],
  [
    42851,
    {
      key: "EEVI_CALIBRATION_POINT_EB103",
    },
  ],
  [
    42852,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB103",
    },
  ],
  [
    42853,
    {
      key: "EEVM_CALIBRATION_RANGE_EB103",
    },
  ],
  [
    42854,
    {
      key: "EEVI_CALIBRATION_RANGE_EB103",
    },
  ],
  [
    42855,
    {
      key: "EEVM_CALIBRATION_POINT_EB102",
    },
  ],
  [
    42856,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB102",
    },
  ],
  [
    42857,
    {
      key: "EEVM_CALIBRATION_POINT_EB102",
    },
  ],
  [
    42858,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB102",
    },
  ],
  [
    42859,
    {
      key: "EEVM_CALIBRATION_POINT_EB102",
    },
  ],
  [
    42860,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB102",
    },
  ],
  [
    42861,
    {
      key: "EEVI_CALIBRATION_POINT_EB102",
    },
  ],
  [
    42862,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB102",
    },
  ],
  [
    42863,
    {
      key: "EEVI_CALIBRATION_POINT_EB102",
    },
  ],
  [
    42864,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB102",
    },
  ],
  [
    42865,
    {
      key: "EEVM_CALIBRATION_RANGE_EB102",
    },
  ],
  [
    42866,
    {
      key: "EEVI_CALIBRATION_RANGE_EB102",
    },
  ],
  [
    42867,
    {
      key: "EEVM_CALIBRATION_POINT_EB101",
    },
  ],
  [
    42868,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB101",
    },
  ],
  [
    42869,
    {
      key: "EEVM_CALIBRATION_POINT_EB101",
    },
  ],
  [
    42870,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB101",
    },
  ],
  [
    42871,
    {
      key: "EEVM_CALIBRATION_POINT_EB101",
    },
  ],
  [
    42872,
    {
      key: "EEVM_CALIBRATION_OFFSET_EB101",
    },
  ],
  [
    42873,
    {
      key: "EEVI_CALIBRATION_POINT_EB101",
    },
  ],
  [
    42874,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB101",
    },
  ],
  [
    42875,
    {
      key: "EEVI_CALIBRATION_POINT_EB101",
    },
  ],
  [
    42876,
    {
      key: "EEVI_CALIBRATION_OFFSET_EB101",
    },
  ],
  [
    42877,
    {
      key: "EEVM_CALIBRATION_RANGE_EB101",
    },
  ],
  [
    42878,
    {
      key: "EEVI_CALIBRATION_RANGE_EB101",
    },
  ],
  [
    42907,
    {
      key: "GREENMASTER_FAN_CONTROL_BF2",
    },
  ],
  [
    42908,
    {
      key: "STATE_EXT_VALVE_SUPPLY_AIR",
    },
  ],
  [
    42909,
    {
      key: "STATE_EXT_OA_DAMPER",
    },
  ],
  [
    42910,
    {
      key: "COUNTER_TO_ACTIVATE_XHW",
    },
  ],
  [
    42912,
    {
      key: "COM_FAILURE_AXC20",
    },
  ],
  [
    42954,
    {
      key: "PUMP_DOWN_RUN",
    },
  ],
  [
    42955,
    {
      key: "SET_TO_SET_HEAT_COMPRESSOR_FREQUENCY",
    },
  ],
  [
    42956,
    {
      key: "SET_TO_SET_CHOOSE_THE_COMPRESSOR_FREQUENCY",
    },
  ],
  [
    42957,
    {
      key: "SUPER_COOLING_ACTIVE",
    },
  ],
  [
    42958,
    {
      key: "FAN_SPEED_GQ2",
    },
  ],
  [
    42959,
    {
      key: "SET_POINT_BP12",
    },
  ],
  [
    42960,
    {
      key: "COMPEN_DUE_TO_OUTD_TEMP_BP12",
    },
  ],
  [
    43001,
    {
      key: "VERSION",
    },
  ],
  [
    43005,
    {
      key: "DEGREE_MINUTES",
      divideBy: 10,
    },
  ],
  [
    43006,
    {
      key: "CALCULATED_FLOW_TEMP_S4",
      divideBy: 10,
    },
  ],
  [
    43007,
    {
      key: "CALCULATED_FLOW_TEMP_S3",
      divideBy: 10,
    },
  ],
  [
    43008,
    {
      key: "CALCULATED_FLOW_TEMP_S2",
      divideBy: 10,
    },
  ],
  [
    43009,
    {
      key: "CALCULATED_FLOW_TEMP_S1",
      divideBy: 10,
    },
  ],
  [
    43010,
    {
      key: "CALCULATED_FLOW_TEMP",
      divideBy: 10,
    },
  ],
  [
    43012,
    {
      key: "A_LEVEL_ALARM",
    },
  ],
  [
    43013,
    {
      key: "FREEZE_PROTECTION_STATUS",
    },
  ],
  [
    43024,
    {
      key: "STATUS_COOLING",
    },
  ],
  [
    43025,
    {
      key: "STATUS_HEATING",
    },
  ],
  [
    43026,
    {
      key: "PRIO_TIMER",
    },
  ],
  [
    43029,
    {
      key: "COMPR_TIMER",
    },
  ],
  [
    43030,
    {
      key: "CIRC_PUMP_TIMER",
    },
  ],
  [
    43031,
    {
      key: "VALVE_TIMER",
    },
  ],
  [
    43033,
    {
      key: "BLANKING_TIME_COUNTER",
    },
  ],
  [
    43061,
    {
      key: "T_AFTER_START_TIMER",
    },
  ],
  [
    43062,
    {
      key: "T_AFTER_MODE_CHANGE",
    },
  ],
  [
    43064,
    {
      key: "HEAT_DT_CALC_VALUE",
      divideBy: 10,
    },
  ],
  [
    43065,
    {
      key: "HEAT_DT_IS_BT12_BT63_BT3",
      divideBy: 10,
    },
  ],
  [
    43066,
    {
      key: "DEFROSTING_TIME",
    },
  ],
  [
    43075,
    {
      key: "COMPRESSOR_STARTS",
    },
  ],
  [
    43077,
    {
      key: "TOT_OP_TIME_COMPR",
    },
  ],
  [
    43079,
    {
      key: "TOT_HW_OP_TIME_COMPR",
    },
  ],
  [
    43081,
    {
      key: "ADDITION_TIME_FACTOR",
      divideBy: 10,
    },
  ],
  [
    43084,
    {
      key: "ELECTRICAL_ADDITION_POWER",
      divideBy: 10,
    },
  ],
  [
    43086,
    {
      key: "STATUS",
    },
  ],
  [
    43088,
    {
      key: "STATUS",
    },
  ],
  [
    43089,
    {
      key: "STATUS",
    },
  ],
  [
    43090,
    {
      key: "STATUS",
    },
  ],
  [
    43091,
    {
      key: "STATUS",
      divideBy: 0,
    },
  ],
  [
    43093,
    {
      key: "MIXING_VALVE_STATE_S4",
    },
  ],
  [
    43094,
    {
      key: "MIXING_VALVE_STATE_S3",
    },
  ],
  [
    43095,
    {
      key: "MIXING_VALVE_STATE_S2",
    },
  ],
  [
    43096,
    {
      key: "MIXING_VALVE_STATE_S1",
    },
  ],
  [
    43097,
    {
      key: "STATUS",
    },
  ],
  [
    43103,
    {
      key: "STATUS",
    },
  ],
  [
    43104,
    {
      key: "STEP",
    },
  ],
  [
    43105,
    {
      key: "STATUS",
    },
  ],
  [
    43108,
    {
      key: "FAN_SPEED_CURRENT",
    },
  ],
  [
    43109,
    {
      key: "ACTUAL_HOT_WATER_TYPE",
    },
  ],
  [
    43112,
    {
      key: "BLOCKED",
    },
  ],
  [
    43113,
    {
      key: "BLOCKED",
    },
  ],
  [
    43115,
    {
      key: "HW_CHARGE_CALC_VALUE",
      divideBy: 10,
    },
  ],
  [
    43116,
    {
      key: "HW_CURR_CHARGE_VAL_BT12_BT63",
      divideBy: 10,
    },
  ],
  [
    43122,
    {
      key: "ALLOWED_COMPR_FREQ_MIN",
    },
  ],
  [
    43123,
    {
      key: "ALLOWED_COMPR_FREQ",
    },
  ],
  [
    43124,
    {
      key: "REFERENCE_AIR_VELOCITY_SENSOR",
      divideBy: 10,
    },
  ],
  [
    43125,
    {
      key: "DECREASE_FROM_REFERENCE",
      divideBy: 10,
    },
  ],
  [
    43132,
    {
      key: "INVERTER_COM_TIMER",
    },
  ],
  [
    43133,
    {
      key: "INVERTER_DRIVE_STATUS",
    },
  ],
  [
    43136,
    {
      key: "CURRENT_COMPR_FREQUENCY",
      divideBy: 10,
    },
  ],
  [
    43137,
    {
      key: "INVERTER_ALARM_CODE",
    },
  ],
  [
    43138,
    {
      key: "INVERTER_FAULT_CODE",
    },
  ],
  [
    43140,
    {
      key: "INVERTER_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    43141,
    {
      key: "COMPR_IN_POWER",
    },
  ],
  [
    43144,
    {
      key: "COMPRESSOR_TIME_FACTOR",
      divideBy: 100,
    },
  ],
  [
    43146,
    {
      key: "DT_INVERTER_EXHAUST_AIR",
      divideBy: 10,
    },
  ],
  [
    43147,
    {
      key: "COMPR_IN_CURRENT",
    },
  ],
  [
    43152,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    43158,
    {
      key: "EXTERNAL_ADJUSTMENT_S4",
    },
  ],
  [
    43159,
    {
      key: "EXTERNAL_ADJUSTMENT_S3",
    },
  ],
  [
    43160,
    {
      key: "EXTERNAL_ADJUSTMENT_S2",
      divideBy: 0,
    },
  ],
  [
    43161,
    {
      key: "EXTERNAL_ADJUSTMENT_S1",
      divideBy: 0,
    },
  ],
  [
    43163,
    {
      key: "BLOCKING_STATUS_OF_THE_SHUNT_CONTROLLED_ADD_HEAT_ACC",
    },
  ],
  [
    43164,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    43165,
    {
      key: "EXTERNAL_BLOCKING_AC",
    },
  ],
  [
    43166,
    {
      key: "EXTERNAL_BLOCKING_PC",
    },
  ],
  [
    43171,
    {
      key: "BLOCKING_STATUS_OF_THE_STEP_CONTROLLED_ADD_HEAT_ACC",
    },
  ],
  [
    43172,
    {
      key: "PCA_BASE_RELAYS",
    },
  ],
  [
    43173,
    {
      key: "PCA_POWER_RELAYS",
    },
  ],
  [
    43174,
    {
      key: "EXP_RELAYS",
    },
  ],
  [
    43175,
    {
      key: "COMPRESSOR_STATUS",
    },
  ],
  [
    43176,
    {
      key: "CIRC_PUMP_STATUS",
    },
  ],
  [
    43177,
    {
      key: "BRINEPUMP_STATUS",
    },
  ],
  [
    43180,
    {
      key: "HWC_PUMP_STATUS_GP11",
    },
  ],
  [
    43181,
    {
      key: "SPEED_HEAT_MED_PUMP_1",
    },
  ],
  [
    43182,
    {
      key: "COMPRESSOR_FREQUENCY_TARGET",
    },
  ],
  [
    43189,
    {
      key: "EXT_SUPPLY_PUMP_STATUS_GP10",
    },
  ],
  [
    43190,
    {
      key: "NEED_COMPR_HW",
    },
  ],
  [
    43192,
    {
      key: "NEED_EL_ADD_HW",
    },
  ],
  [
    43193,
    {
      key: "NEED_COMPR_HEATING",
    },
  ],
  [
    43194,
    {
      key: "NEED_EL_ADD_HEATING",
    },
  ],
  [
    43195,
    {
      key: "NEED_COMPR_POOL",
    },
  ],
  [
    43196,
    {
      key: "NEED_EL_ADD_POOL",
    },
  ],
  [
    43210,
    {
      key: "PRIO_COMPR_HW",
    },
  ],
  [
    43211,
    {
      key: "PRIO_EL_ADD_HW",
    },
  ],
  [
    43212,
    {
      key: "PRIO_COMPR_HEATING",
    },
  ],
  [
    43213,
    {
      key: "PRIO_EL_ADD_HEATING",
    },
  ],
  [
    43214,
    {
      key: "PRIO_COMPR_POOL",
    },
  ],
  [
    43215,
    {
      key: "PRIO_EL_ADD_POOL",
    },
  ],
  [
    43230,
    {
      key: "HEAT_METER",
      divideBy: 10,
    },
  ],
  [
    43239,
    {
      key: "TOT_HW_OP_TIME_ADD",
    },
  ],
  [
    43305,
    {
      key: "COMPRESSOR_TIME_FACTOR_HOT_WATER",
      divideBy: 100,
    },
  ],
  [
    43371,
    {
      key: "HOTGAS_LIMIT",
    },
  ],
  [
    43372,
    {
      key: "EVAPORATING_LIMIT",
    },
  ],
  [
    43375,
    {
      key: "COMPR_IN_POWER_MEAN",
    },
  ],
  [
    43382,
    {
      key: "INVERTER_MEM_ERROR_CODE",
    },
  ],
  [
    43383,
    {
      key: "FJVM_RELAYS",
    },
  ],
  [
    43389,
    {
      key: "TEMP_LUX_STATUS",
    },
  ],
  [
    43390,
    {
      key: "TEMP_LUX_SET",
    },
  ],
  [
    43393,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    43395,
    {
      key: "HPAC_RELAYS",
    },
  ],
  [
    43396,
    {
      key: "VACATION_STATUS",
    },
  ],
  [
    43397,
    {
      key: "INSTALLED_COMPONENTS",
    },
  ],
  [
    43399,
    {
      key: "DEMO_MODE",
    },
  ],
  [
    43406,
    {
      key: "BLANKING_TIME_COUNTER",
    },
  ],
  [
    43407,
    {
      key: "BLANKING_TIME_COUNTER",
    },
  ],
  [
    43408,
    {
      key: "COMPR_TIMER_EP15",
    },
  ],
  [
    43409,
    {
      key: "COMPR_TIMER_EP14",
    },
  ],
  [
    43410,
    {
      key: "CIRC_PUMP_TIMER_EP15",
    },
  ],
  [
    43411,
    {
      key: "CIRC_PUMP_TIMER_EP14",
    },
  ],
  [
    43412,
    {
      key: "VALVE_TIMER",
    },
  ],
  [
    43413,
    {
      key: "VALVE_TIMER",
    },
  ],
  [
    43414,
    {
      key: "COMPRESSOR_STARTS_EB100_EP15",
    },
  ],
  [
    43416,
    {
      key: "COMPRESSOR_STARTS_EB100_EP14",
      divideBy: 0,
    },
  ],
  [
    43418,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB100_EP15",
    },
  ],
  [
    43420,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB100_EP14",
      divideBy: 0,
    },
  ],
  [
    43422,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB100_EP15",
    },
  ],
  [
    43424,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB100_EP14",
      divideBy: 0,
    },
  ],
  [
    43426,
    {
      key: "STATUS_EP15",
    },
  ],
  [
    43427,
    {
      key: "STATUS_EP14",
    },
  ],
  [
    43430,
    {
      key: "SUPPLY_PUMP_STATE_EP15",
    },
  ],
  [
    43431,
    {
      key: "SUPPLY_PUMP_STATE_EP14",
    },
  ],
  [
    43432,
    {
      key: "BRINE_PUMP_STATE_EP15",
    },
  ],
  [
    43433,
    {
      key: "BRINE_PUMP_STATE_EP14",
    },
  ],
  [
    43434,
    {
      key: "CPR_STATUS_EP15",
    },
  ],
  [
    43435,
    {
      key: "CPR_STATUS_EP14",
    },
  ],
  [
    43436,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EP15",
    },
  ],
  [
    43437,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EP14",
      divideBy: 0,
    },
  ],
  [
    43438,
    {
      key: "BRINE_PUMP_SPEED_EP15_GP2",
    },
  ],
  [
    43439,
    {
      key: "BRINE_PUMP_SPEED_EP14_GP2",
      divideBy: 0,
    },
  ],
  [
    43444,
    {
      key: "STATUS",
    },
  ],
  [
    43455,
    {
      key: "TIME_TO_NEXT_ALLOWED_CHARGE_PUMP_CONTROL",
    },
  ],
  [
    43456,
    {
      key: "MAX_CONDENSER_OUT_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    43457,
    {
      key: "MAX_CONDENCER_SET",
      divideBy: 10,
    },
  ],
  [
    43458,
    {
      key: "MAX_CONDENSER_IN_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    43459,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    43460,
    {
      key: "STATE_DEH",
    },
  ],
  [
    43466,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    43473,
    {
      key: "DOCKED_HEAT_COMPRESSORS",
    },
  ],
  [
    43474,
    {
      key: "DOCKED_HOT_WATER_COMPRESSORS",
    },
  ],
  [
    43475,
    {
      key: "DOCKED_POOL_1_COMPRESSORS",
    },
  ],
  [
    43481,
    {
      key: "STATE_QN10",
    },
  ],
  [
    43482,
    {
      key: "MAX_CONDENSER_HW_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    43484,
    {
      key: "COOLING",
    },
  ],
  [
    43485,
    {
      key: "COOLING",
    },
  ],
  [
    43486,
    {
      key: "COOLING",
    },
  ],
  [
    43487,
    {
      key: "COOLING",
    },
  ],
  [
    43490,
    {
      key: "STATUS",
    },
  ],
  [
    43512,
    {
      key: "TIME_LEFT_OF_START_TIME_5_1_18",
    },
  ],
  [
    43513,
    {
      key: "PCA_BASE_RELAYS_EB100_EP15",
    },
  ],
  [
    43514,
    {
      key: "PCA_BASE_RELAYS_EB100_EP14",
    },
  ],
  [
    43516,
    {
      key: "PCA_POWER_RELAYS_EP14",
    },
  ],
  [
    43517,
    {
      key: "EXP_RELAYS",
    },
  ],
  [
    43518,
    {
      key: "EXP_RELAYS",
    },
  ],
  [
    43525,
    {
      key: "STATUS_INFO",
    },
  ],
  [
    43527,
    {
      key: "HEAT_PUMP_FUNCTIONALITY_0",
    },
  ],
  [
    43529,
    {
      key: "ACTIVATED_SLAVES",
    },
  ],
  [
    43532,
    {
      key: "HEAT_PUMP_FUNCTIONALITY_1",
    },
  ],
  [
    43536,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    43542,
    {
      key: "CALC_SUPPLY_AIR_TEMP",
      divideBy: 10,
    },
  ],
  [
    43543,
    {
      key: "PRIO",
    },
  ],
  [
    43544,
    {
      key: "PRIO",
    },
  ],
  [
    43555,
    {
      key: "HW_COMFORT_SHUNT_STATE",
    },
  ],
  [
    43556,
    {
      key: "HW_COMFORT_ADD_STATUS",
    },
  ],
  [
    43560,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    43561,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    43563,
    {
      key: "POOL_2_VALVE_QN19",
    },
  ],
  [
    43564,
    {
      key: "POOL_1_VALVE_QN19",
    },
  ],
  [
    43565,
    {
      key: "NEED_COMPR_POOL",
    },
  ],
  [
    43566,
    {
      key: "NEED_COMPR_POOL",
    },
  ],
  [
    43567,
    {
      key: "NEED_EL_ADD_POOL",
    },
  ],
  [
    43568,
    {
      key: "NEED_EL_ADD_POOL",
    },
  ],
  [
    43573,
    {
      key: "PRIO_COMPR_POOL",
    },
  ],
  [
    43574,
    {
      key: "PRIO_COMPR_POOL",
    },
  ],
  [
    43575,
    {
      key: "PRIO_EL_ADD_POOL",
    },
  ],
  [
    43576,
    {
      key: "PRIO_EL_ADD_POOL",
    },
  ],
  [
    43577,
    {
      key: "DOCKED_POOL_2_COMPRESSORS",
    },
  ],
  [
    43580,
    {
      key: "VERSION_EB108",
    },
  ],
  [
    43581,
    {
      key: "INITIALIZED_EB108",
    },
  ],
  [
    43582,
    {
      key: "_EB108",
    },
  ],
  [
    43583,
    {
      key: "_EB108",
    },
  ],
  [
    43584,
    {
      key: "_EB108",
    },
  ],
  [
    43585,
    {
      key: "_EB108",
    },
  ],
  [
    43586,
    {
      key: "_EB108",
    },
  ],
  [
    43587,
    {
      key: "_EB108",
    },
  ],
  [
    43588,
    {
      key: "_EB108",
    },
  ],
  [
    43589,
    {
      key: "_EB108",
    },
  ],
  [
    43590,
    {
      key: "_EB108",
    },
  ],
  [
    43591,
    {
      key: "_EB108",
    },
  ],
  [
    43592,
    {
      key: "_EB108",
    },
  ],
  [
    43593,
    {
      key: "_EB108",
    },
  ],
  [
    43594,
    {
      key: "_EB108",
    },
  ],
  [
    43595,
    {
      key: "_EB108",
    },
  ],
  [
    43596,
    {
      key: "_EB108",
    },
  ],
  [
    43597,
    {
      key: "_EB108",
    },
  ],
  [
    43598,
    {
      key: "SLAVE_TYPE_EB108",
    },
  ],
  [
    43599,
    {
      key: "COMPRESSOR_SIZE_EB108",
      divideBy: 10,
    },
  ],
  [
    43600,
    {
      key: "RETURN_TEMP_EB108_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    43601,
    {
      key: "BRINE_IN_EB108_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    43602,
    {
      key: "BRINE_OUT_EB108_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    43603,
    {
      key: "CONDENSER_OUT_EB108_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    43604,
    {
      key: "HOT_GAS_EB108_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    43605,
    {
      key: "LIQUID_LINE_EB108_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    43606,
    {
      key: "SUCTION_GAS_EB108_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    43607,
    {
      key: "OIL_TEMPERATURE_EB108_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    43608,
    {
      key: "LOW_PRESS_TRANSMIT_EB108_EP15_BP8",
    },
  ],
  [
    43609,
    {
      key: "COMPRESSOR_STATE_EB108_EP15",
    },
  ],
  [
    43610,
    {
      key: "COMPR_TIME_TO_START_EB108_EP15",
    },
  ],
  [
    43611,
    {
      key: "RELAY_STATUS_EB108_EP15",
    },
  ],
  [
    43612,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB108_EP15",
    },
  ],
  [
    43613,
    {
      key: "BRINE_PUMP_SPEED_EB108_EP15",
    },
  ],
  [
    43614,
    {
      key: "COMPRESSOR_STARTS_EB108_EP15",
    },
  ],
  [
    43616,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB108_EP15",
    },
  ],
  [
    43618,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB108_EP15",
    },
  ],
  [
    43620,
    {
      key: "ALARM_NUMBER_EB108_EP15",
    },
  ],
  [
    43621,
    {
      key: "RETURN_TEMP_EB108_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    43622,
    {
      key: "BRINE_IN_EB108_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    43623,
    {
      key: "BRINE_OUT_EB108_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    43624,
    {
      key: "CONDENSER_OUT_EB108_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    43625,
    {
      key: "HOT_GAS_EB108_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    43626,
    {
      key: "LIQUID_LINE_EB108_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    43627,
    {
      key: "SUCTION_GAS_EB108_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    43628,
    {
      key: "OIL_TEMPERATURE_EB108_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    43629,
    {
      key: "LOW_PRESS_TRANSMIT_EB108_EP14_BP8",
    },
  ],
  [
    43630,
    {
      key: "COMPRESSOR_STATE_EB108_EP14",
    },
  ],
  [
    43631,
    {
      key: "COMPR_TIME_TO_START_EB108_EP14",
    },
  ],
  [
    43632,
    {
      key: "RELAY_STATUS_EB108_EP14",
    },
  ],
  [
    43633,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB108_EP14",
    },
  ],
  [
    43634,
    {
      key: "BRINE_PUMP_SPEED_EB108_EP14",
    },
  ],
  [
    43635,
    {
      key: "COMPRESSOR_STARTS_EB108_EP14",
    },
  ],
  [
    43637,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB108_EP14",
    },
  ],
  [
    43639,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB108_EP14",
    },
  ],
  [
    43641,
    {
      key: "ALARM_NUMBER_EB108_EP14",
    },
  ],
  [
    43642,
    {
      key: "VERSION_EB107",
    },
  ],
  [
    43643,
    {
      key: "INITIALIZED_EB107",
    },
  ],
  [
    43644,
    {
      key: "_EB107",
    },
  ],
  [
    43645,
    {
      key: "_EB107",
    },
  ],
  [
    43646,
    {
      key: "_EB107",
    },
  ],
  [
    43647,
    {
      key: "_EB107",
    },
  ],
  [
    43648,
    {
      key: "_EB107",
    },
  ],
  [
    43649,
    {
      key: "_EB107",
    },
  ],
  [
    43650,
    {
      key: "_EB107",
    },
  ],
  [
    43651,
    {
      key: "_EB107",
    },
  ],
  [
    43652,
    {
      key: "_EB107",
    },
  ],
  [
    43653,
    {
      key: "_EB107",
    },
  ],
  [
    43654,
    {
      key: "_EB107",
    },
  ],
  [
    43655,
    {
      key: "_EB107",
    },
  ],
  [
    43656,
    {
      key: "_EB107",
    },
  ],
  [
    43657,
    {
      key: "_EB107",
    },
  ],
  [
    43658,
    {
      key: "_EB107",
    },
  ],
  [
    43659,
    {
      key: "_EB107",
    },
  ],
  [
    43660,
    {
      key: "SLAVE_TYPE_EB107",
    },
  ],
  [
    43661,
    {
      key: "COMPRESSOR_SIZE_EB107",
      divideBy: 10,
    },
  ],
  [
    43662,
    {
      key: "RETURN_TEMP_EB107_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    43663,
    {
      key: "BRINE_IN_EB107_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    43664,
    {
      key: "BRINE_OUT_EB107_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    43665,
    {
      key: "CONDENSER_OUT_EB107_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    43666,
    {
      key: "HOT_GAS_EB107_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    43667,
    {
      key: "LIQUID_LINE_EB107_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    43668,
    {
      key: "SUCTION_GAS_EB107_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    43669,
    {
      key: "OIL_TEMPERATURE_EB107_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    43670,
    {
      key: "LOW_PRESS_TRANSMIT_EB107_EP15_BP8",
    },
  ],
  [
    43671,
    {
      key: "COMPRESSOR_STATE_EB107_EP15",
    },
  ],
  [
    43672,
    {
      key: "COMPR_TIME_TO_START_EB107_EP15",
    },
  ],
  [
    43673,
    {
      key: "RELAY_STATUS_EB107_EP15",
    },
  ],
  [
    43674,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB107_EP15",
    },
  ],
  [
    43675,
    {
      key: "BRINE_PUMP_SPEED_EB107_EP15",
    },
  ],
  [
    43676,
    {
      key: "COMPRESSOR_STARTS_EB107_EP15",
    },
  ],
  [
    43678,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB107_EP15",
    },
  ],
  [
    43680,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB107_EP15",
    },
  ],
  [
    43682,
    {
      key: "ALARM_NUMBER_EB107_EP15",
    },
  ],
  [
    43683,
    {
      key: "RETURN_TEMP_EB107_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    43684,
    {
      key: "BRINE_IN_EB107_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    43685,
    {
      key: "BRINE_OUT_EB107_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    43686,
    {
      key: "CONDENSER_OUT_EB107_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    43687,
    {
      key: "HOT_GAS_EB107_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    43688,
    {
      key: "LIQUID_LINE_EB107_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    43689,
    {
      key: "SUCTION_GAS_EB107_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    43690,
    {
      key: "OIL_TEMPERATURE_EB107_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    43691,
    {
      key: "LOW_PRESS_TRANSMIT_EB107_EP14_BP8",
    },
  ],
  [
    43692,
    {
      key: "COMPRESSOR_STATE_EB107_EP14",
    },
  ],
  [
    43693,
    {
      key: "COMPR_TIME_TO_START_EB107_EP14",
    },
  ],
  [
    43694,
    {
      key: "RELAY_STATUS_EB107_EP14",
    },
  ],
  [
    43695,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB107_EP14",
    },
  ],
  [
    43696,
    {
      key: "BRINE_PUMP_SPEED_EB107_EP14",
    },
  ],
  [
    43697,
    {
      key: "COMPRESSOR_STARTS_EB107_EP14",
    },
  ],
  [
    43699,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB107_EP14",
    },
  ],
  [
    43701,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB107_EP14",
    },
  ],
  [
    43703,
    {
      key: "ALARM_NUMBER_EB107_EP14",
    },
  ],
  [
    43704,
    {
      key: "VERSION_EB106",
    },
  ],
  [
    43705,
    {
      key: "INITIALIZED_EB106",
    },
  ],
  [
    43706,
    {
      key: "_EB106",
    },
  ],
  [
    43707,
    {
      key: "_EB106",
    },
  ],
  [
    43708,
    {
      key: "_EB106",
    },
  ],
  [
    43709,
    {
      key: "_EB106",
    },
  ],
  [
    43710,
    {
      key: "_EB106",
    },
  ],
  [
    43711,
    {
      key: "_EB106",
    },
  ],
  [
    43712,
    {
      key: "_EB106",
    },
  ],
  [
    43713,
    {
      key: "_EB106",
    },
  ],
  [
    43714,
    {
      key: "_EB106",
    },
  ],
  [
    43715,
    {
      key: "_EB106",
    },
  ],
  [
    43716,
    {
      key: "_EB106",
    },
  ],
  [
    43717,
    {
      key: "_EB106",
    },
  ],
  [
    43718,
    {
      key: "_EB106",
    },
  ],
  [
    43719,
    {
      key: "_EB106",
    },
  ],
  [
    43720,
    {
      key: "_EB106",
    },
  ],
  [
    43721,
    {
      key: "_EB106",
    },
  ],
  [
    43722,
    {
      key: "SLAVE_TYPE_EB106",
    },
  ],
  [
    43723,
    {
      key: "COMPRESSOR_SIZE_EB106",
      divideBy: 10,
    },
  ],
  [
    43724,
    {
      key: "RETURN_TEMP_EB106_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    43725,
    {
      key: "BRINE_IN_EB106_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    43726,
    {
      key: "BRINE_OUT_EB106_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    43727,
    {
      key: "CONDENSER_OUT_EB106_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    43728,
    {
      key: "HOT_GAS_EB106_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    43729,
    {
      key: "LIQUID_LINE_EB106_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    43730,
    {
      key: "SUCTION_GAS_EB106_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    43731,
    {
      key: "OIL_TEMPERATURE_EB106_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    43732,
    {
      key: "LOW_PRESS_TRANSMIT_EB106_EP15_BP8",
    },
  ],
  [
    43733,
    {
      key: "COMPRESSOR_STATE_EB106_EP15",
    },
  ],
  [
    43734,
    {
      key: "COMPR_TIME_TO_START_EB106_EP15",
    },
  ],
  [
    43735,
    {
      key: "RELAY_STATUS_EB106_EP15",
    },
  ],
  [
    43736,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB106_EP15",
    },
  ],
  [
    43737,
    {
      key: "BRINE_PUMP_SPEED_EB106_EP15",
    },
  ],
  [
    43738,
    {
      key: "COMPRESSOR_STARTS_EB106_EP15",
    },
  ],
  [
    43740,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB106_EP15",
    },
  ],
  [
    43742,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB106_EP15",
    },
  ],
  [
    43744,
    {
      key: "ALARM_NUMBER_EB106_EP15",
    },
  ],
  [
    43745,
    {
      key: "RETURN_TEMP_EB106_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    43746,
    {
      key: "BRINE_IN_EB106_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    43747,
    {
      key: "BRINE_OUT_EB106_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    43748,
    {
      key: "CONDENSER_OUT_EB106_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    43749,
    {
      key: "HOT_GAS_EB106_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    43750,
    {
      key: "LIQUID_LINE_EB106_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    43751,
    {
      key: "SUCTION_GAS_EB106_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    43752,
    {
      key: "OIL_TEMPERATURE_EB106_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    43753,
    {
      key: "LOW_PRESS_TRANSMIT_EB106_EP14_BP8",
    },
  ],
  [
    43754,
    {
      key: "COMPRESSOR_STATE_EB106_EP14",
    },
  ],
  [
    43755,
    {
      key: "COMPR_TIME_TO_START_EB106_EP14",
    },
  ],
  [
    43756,
    {
      key: "RELAY_STATUS_EB106_EP14",
    },
  ],
  [
    43757,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB106_EP14",
    },
  ],
  [
    43758,
    {
      key: "BRINE_PUMP_SPEED_EB106_EP14",
    },
  ],
  [
    43759,
    {
      key: "COMPRESSOR_STARTS_EB106_EP14",
    },
  ],
  [
    43761,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB106_EP14",
    },
  ],
  [
    43763,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB106_EP14",
    },
  ],
  [
    43765,
    {
      key: "ALARM_NUMBER_EB106_EP14",
    },
  ],
  [
    43766,
    {
      key: "VERSION_EB105",
    },
  ],
  [
    43767,
    {
      key: "INITIALIZED_EB105",
    },
  ],
  [
    43768,
    {
      key: "_EB105",
    },
  ],
  [
    43769,
    {
      key: "_EB105",
    },
  ],
  [
    43770,
    {
      key: "_EB105",
    },
  ],
  [
    43771,
    {
      key: "_EB105",
    },
  ],
  [
    43772,
    {
      key: "_EB105",
    },
  ],
  [
    43773,
    {
      key: "_EB105",
    },
  ],
  [
    43774,
    {
      key: "_EB105",
    },
  ],
  [
    43775,
    {
      key: "_EB105",
    },
  ],
  [
    43776,
    {
      key: "_EB105",
    },
  ],
  [
    43777,
    {
      key: "_EB105",
    },
  ],
  [
    43778,
    {
      key: "_EB105",
    },
  ],
  [
    43779,
    {
      key: "_EB105",
    },
  ],
  [
    43780,
    {
      key: "_EB105",
    },
  ],
  [
    43781,
    {
      key: "_EB105",
    },
  ],
  [
    43782,
    {
      key: "_EB105",
    },
  ],
  [
    43783,
    {
      key: "_EB105",
    },
  ],
  [
    43784,
    {
      key: "SLAVE_TYPE_EB105",
    },
  ],
  [
    43785,
    {
      key: "COMPRESSOR_SIZE_EB105",
      divideBy: 10,
    },
  ],
  [
    43786,
    {
      key: "RETURN_TEMP_EB105_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    43787,
    {
      key: "BRINE_IN_EB105_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    43788,
    {
      key: "BRINE_OUT_EB105_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    43789,
    {
      key: "CONDENSER_OUT_EB105_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    43790,
    {
      key: "HOT_GAS_EB105_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    43791,
    {
      key: "LIQUID_LINE_EB105_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    43792,
    {
      key: "SUCTION_GAS_EB105_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    43793,
    {
      key: "OIL_TEMPERATURE_EB105_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    43794,
    {
      key: "LOW_PRESS_TRANSMIT_EB105_EP15_BP8",
    },
  ],
  [
    43795,
    {
      key: "COMPRESSOR_STATE_EB105_EP15",
    },
  ],
  [
    43796,
    {
      key: "COMPR_TIME_TO_START_EB105_EP15",
    },
  ],
  [
    43797,
    {
      key: "RELAY_STATUS_EB105_EP15",
    },
  ],
  [
    43798,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB105_EP15",
    },
  ],
  [
    43799,
    {
      key: "BRINE_PUMP_SPEED_EB105_EP15",
    },
  ],
  [
    43800,
    {
      key: "COMPRESSOR_STARTS_EB105_EP15",
    },
  ],
  [
    43802,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB105_EP15",
    },
  ],
  [
    43804,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB105_EP15",
    },
  ],
  [
    43806,
    {
      key: "ALARM_NUMBER_EB105_EP15",
    },
  ],
  [
    43807,
    {
      key: "RETURN_TEMP_EB105_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    43808,
    {
      key: "BRINE_IN_EB105_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    43809,
    {
      key: "BRINE_OUT_EB105_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    43810,
    {
      key: "CONDENSER_OUT_EB105_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    43811,
    {
      key: "HOT_GAS_EB105_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    43812,
    {
      key: "LIQUID_LINE_EB105_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    43813,
    {
      key: "SUCTION_GAS_EB105_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    43814,
    {
      key: "OIL_TEMPERATURE_EB105_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    43815,
    {
      key: "LOW_PRESS_TRANSMIT_EB105_EP14_BP8",
    },
  ],
  [
    43816,
    {
      key: "COMPRESSOR_STATE_EB105_EP14",
    },
  ],
  [
    43817,
    {
      key: "COMPR_TIME_TO_START_EB105_EP14",
    },
  ],
  [
    43818,
    {
      key: "RELAY_STATUS_EB105_EP14",
    },
  ],
  [
    43819,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB105_EP14",
    },
  ],
  [
    43820,
    {
      key: "BRINE_PUMP_SPEED_EB105_EP14",
    },
  ],
  [
    43821,
    {
      key: "COMPRESSOR_STARTS_EB105_EP14",
    },
  ],
  [
    43823,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB105_EP14",
    },
  ],
  [
    43825,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB105_EP14",
    },
  ],
  [
    43827,
    {
      key: "ALARM_NUMBER_EB105_EP14",
    },
  ],
  [
    43828,
    {
      key: "VERSION_EB104",
    },
  ],
  [
    43829,
    {
      key: "INITIALIZED_EB104",
    },
  ],
  [
    43830,
    {
      key: "_EB104",
    },
  ],
  [
    43831,
    {
      key: "_EB104",
    },
  ],
  [
    43832,
    {
      key: "_EB104",
    },
  ],
  [
    43833,
    {
      key: "_EB104",
    },
  ],
  [
    43834,
    {
      key: "_EB104",
    },
  ],
  [
    43835,
    {
      key: "_EB104",
    },
  ],
  [
    43836,
    {
      key: "_EB104",
    },
  ],
  [
    43837,
    {
      key: "_EB104",
    },
  ],
  [
    43838,
    {
      key: "_EB104",
    },
  ],
  [
    43839,
    {
      key: "_EB104",
    },
  ],
  [
    43840,
    {
      key: "_EB104",
    },
  ],
  [
    43841,
    {
      key: "_EB104",
    },
  ],
  [
    43842,
    {
      key: "_EB104",
    },
  ],
  [
    43843,
    {
      key: "_EB104",
    },
  ],
  [
    43844,
    {
      key: "_EB104",
    },
  ],
  [
    43845,
    {
      key: "_EB104",
    },
  ],
  [
    43846,
    {
      key: "SLAVE_TYPE_EB104",
    },
  ],
  [
    43847,
    {
      key: "COMPRESSOR_SIZE_EB104",
      divideBy: 10,
    },
  ],
  [
    43848,
    {
      key: "RETURN_TEMP_EB104_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    43849,
    {
      key: "BRINE_IN_EB104_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    43850,
    {
      key: "BRINE_OUT_EB104_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    43851,
    {
      key: "CONDENSER_OUT_EB104_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    43852,
    {
      key: "HOT_GAS_EB104_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    43853,
    {
      key: "LIQUID_LINE_EB104_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    43854,
    {
      key: "SUCTION_GAS_EB104_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    43855,
    {
      key: "OIL_TEMPERATURE_EB104_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    43856,
    {
      key: "LOW_PRESS_TRANSMIT_EB104_EP15_BP8",
    },
  ],
  [
    43857,
    {
      key: "COMPRESSOR_STATE_EB104_EP15",
    },
  ],
  [
    43858,
    {
      key: "COMPR_TIME_TO_START_EB104_EP15",
    },
  ],
  [
    43859,
    {
      key: "RELAY_STATUS_EB104_EP15",
    },
  ],
  [
    43860,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB104_EP15",
    },
  ],
  [
    43861,
    {
      key: "BRINE_PUMP_SPEED_EB104_EP15",
    },
  ],
  [
    43862,
    {
      key: "COMPRESSOR_STARTS_EB104_EP15",
    },
  ],
  [
    43864,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB104_EP15",
    },
  ],
  [
    43866,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB104_EP15",
    },
  ],
  [
    43868,
    {
      key: "ALARM_NUMBER_EB104_EP15",
    },
  ],
  [
    43869,
    {
      key: "RETURN_TEMP_EB104_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    43870,
    {
      key: "BRINE_IN_EB104_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    43871,
    {
      key: "BRINE_OUT_EB104_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    43872,
    {
      key: "CONDENSER_OUT_EB104_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    43873,
    {
      key: "HOT_GAS_EB104_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    43874,
    {
      key: "LIQUID_LINE_EB104_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    43875,
    {
      key: "SUCTION_GAS_EB104_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    43876,
    {
      key: "OIL_TEMPERATURE_EB104_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    43877,
    {
      key: "LOW_PRESS_TRANSMIT_EB104_EP14_BP8",
    },
  ],
  [
    43878,
    {
      key: "COMPRESSOR_STATE_EB104_EP14",
    },
  ],
  [
    43879,
    {
      key: "COMPR_TIME_TO_START_EB104_EP14",
    },
  ],
  [
    43880,
    {
      key: "RELAY_STATUS_EB104_EP14",
    },
  ],
  [
    43881,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB104_EP14",
    },
  ],
  [
    43882,
    {
      key: "BRINE_PUMP_SPEED_EB104_EP14",
    },
  ],
  [
    43883,
    {
      key: "COMPRESSOR_STARTS_EB104_EP14",
    },
  ],
  [
    43885,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB104_EP14",
    },
  ],
  [
    43887,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB104_EP14",
    },
  ],
  [
    43889,
    {
      key: "ALARM_NUMBER_EB104_EP14",
    },
  ],
  [
    43890,
    {
      key: "VERSION_EB103",
    },
  ],
  [
    43891,
    {
      key: "INITIALIZED_EB103",
    },
  ],
  [
    43892,
    {
      key: "_EB103",
    },
  ],
  [
    43893,
    {
      key: "_EB103",
    },
  ],
  [
    43894,
    {
      key: "_EB103",
    },
  ],
  [
    43895,
    {
      key: "_EB103",
    },
  ],
  [
    43896,
    {
      key: "_EB103",
    },
  ],
  [
    43897,
    {
      key: "_EB103",
    },
  ],
  [
    43898,
    {
      key: "_EB103",
    },
  ],
  [
    43899,
    {
      key: "_EB103",
    },
  ],
  [
    43900,
    {
      key: "_EB103",
    },
  ],
  [
    43901,
    {
      key: "_EB103",
    },
  ],
  [
    43902,
    {
      key: "_EB103",
    },
  ],
  [
    43903,
    {
      key: "_EB103",
    },
  ],
  [
    43904,
    {
      key: "_EB103",
    },
  ],
  [
    43905,
    {
      key: "_EB103",
    },
  ],
  [
    43906,
    {
      key: "_EB103",
    },
  ],
  [
    43907,
    {
      key: "_EB103",
    },
  ],
  [
    43908,
    {
      key: "SLAVE_TYPE_EB103",
    },
  ],
  [
    43909,
    {
      key: "COMPRESSOR_SIZE_EB103",
      divideBy: 10,
    },
  ],
  [
    43910,
    {
      key: "RETURN_TEMP_EB103_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    43911,
    {
      key: "BRINE_IN_EB103_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    43912,
    {
      key: "BRINE_OUT_EB103_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    43913,
    {
      key: "CONDENSER_OUT_EB103_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    43914,
    {
      key: "HOT_GAS_EB103_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    43915,
    {
      key: "LIQUID_LINE_EB103_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    43916,
    {
      key: "SUCTION_GAS_EB103_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    43917,
    {
      key: "OIL_TEMPERATURE_EB103_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    43918,
    {
      key: "LOW_PRESS_TRANSMIT_EB103_EP15_BP8",
    },
  ],
  [
    43919,
    {
      key: "COMPRESSOR_STATE_EB103_EP15",
    },
  ],
  [
    43920,
    {
      key: "COMPR_TIME_TO_START_EB103_EP15",
    },
  ],
  [
    43921,
    {
      key: "RELAY_STATUS_EB103_EP15",
    },
  ],
  [
    43922,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB103_EP15",
    },
  ],
  [
    43923,
    {
      key: "BRINE_PUMP_SPEED_EB103_EP15",
    },
  ],
  [
    43924,
    {
      key: "COMPRESSOR_STARTS_EB103_EP15",
    },
  ],
  [
    43926,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB103_EP15",
    },
  ],
  [
    43928,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB103_EP15",
    },
  ],
  [
    43930,
    {
      key: "ALARM_NUMBER_EB103_EP15",
    },
  ],
  [
    43931,
    {
      key: "RETURN_TEMP_EB103_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    43932,
    {
      key: "BRINE_IN_EB103_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    43933,
    {
      key: "BRINE_OUT_EB103_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    43934,
    {
      key: "CONDENSER_OUT_EB103_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    43935,
    {
      key: "HOT_GAS_EB103_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    43936,
    {
      key: "LIQUID_LINE_EB103_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    43937,
    {
      key: "SUCTION_GAS_EB103_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    43938,
    {
      key: "OIL_TEMPERATURE_EB103_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    43939,
    {
      key: "LOW_PRESS_TRANSMIT_EB103_EP14_BP8",
    },
  ],
  [
    43940,
    {
      key: "COMPRESSOR_STATE_EB103_EP14",
    },
  ],
  [
    43941,
    {
      key: "COMPR_TIME_TO_START_EB103_EP14",
    },
  ],
  [
    43942,
    {
      key: "RELAY_STATUS_EB103_EP14",
    },
  ],
  [
    43943,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB103_EP14",
    },
  ],
  [
    43944,
    {
      key: "BRINE_PUMP_SPEED_EB103_EP14",
    },
  ],
  [
    43945,
    {
      key: "COMPRESSOR_STARTS_EB103_EP14",
    },
  ],
  [
    43947,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB103_EP14",
    },
  ],
  [
    43949,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB103_EP14",
    },
  ],
  [
    43951,
    {
      key: "ALARM_NUMBER_EB103_EP14",
    },
  ],
  [
    43952,
    {
      key: "VERSION_EB102",
    },
  ],
  [
    43953,
    {
      key: "INITIALIZED_EB102",
    },
  ],
  [
    43954,
    {
      key: "_EB102",
    },
  ],
  [
    43955,
    {
      key: "_EB102",
    },
  ],
  [
    43956,
    {
      key: "_EB102",
    },
  ],
  [
    43957,
    {
      key: "_EB102",
    },
  ],
  [
    43958,
    {
      key: "_EB102",
    },
  ],
  [
    43959,
    {
      key: "_EB102",
    },
  ],
  [
    43960,
    {
      key: "_EB102",
    },
  ],
  [
    43961,
    {
      key: "_EB102",
    },
  ],
  [
    43962,
    {
      key: "_EB102",
    },
  ],
  [
    43963,
    {
      key: "_EB102",
    },
  ],
  [
    43964,
    {
      key: "_EB102",
    },
  ],
  [
    43965,
    {
      key: "_EB102",
    },
  ],
  [
    43966,
    {
      key: "_EB102",
    },
  ],
  [
    43967,
    {
      key: "_EB102",
    },
  ],
  [
    43968,
    {
      key: "_EB102",
    },
  ],
  [
    43969,
    {
      key: "_EB102",
    },
  ],
  [
    43970,
    {
      key: "SLAVE_TYPE_EB102",
    },
  ],
  [
    43971,
    {
      key: "COMPRESSOR_SIZE_EB102",
      divideBy: 10,
    },
  ],
  [
    43972,
    {
      key: "RETURN_TEMP_EB102_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    43973,
    {
      key: "BRINE_IN_EB102_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    43974,
    {
      key: "BRINE_OUT_EB102_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    43975,
    {
      key: "CONDENSER_OUT_EB102_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    43976,
    {
      key: "HOT_GAS_EB102_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    43977,
    {
      key: "LIQUID_LINE_EB102_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    43978,
    {
      key: "SUCTION_GAS_EB102_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    43979,
    {
      key: "OIL_TEMPERATURE_EB102_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    43980,
    {
      key: "LOW_PRESS_TRANSMIT_EB102_EP15_BP8",
    },
  ],
  [
    43981,
    {
      key: "COMPRESSOR_STATE_EB102_EP15",
    },
  ],
  [
    43982,
    {
      key: "COMPR_TIME_TO_START_EB102_EP15",
    },
  ],
  [
    43983,
    {
      key: "RELAY_STATUS_EB102_EP15",
    },
  ],
  [
    43984,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB102_EP15",
    },
  ],
  [
    43985,
    {
      key: "BRINE_PUMP_SPEED_EB102_EP15",
    },
  ],
  [
    43986,
    {
      key: "COMPRESSOR_STARTS_EB102_EP15",
    },
  ],
  [
    43988,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB102_EP15",
    },
  ],
  [
    43990,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB102_EP15",
    },
  ],
  [
    43992,
    {
      key: "ALARM_NUMBER_EB102_EP15",
    },
  ],
  [
    43993,
    {
      key: "RETURN_TEMP_EB102_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    43994,
    {
      key: "BRINE_IN_EB102_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    43995,
    {
      key: "BRINE_OUT_EB102_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    43996,
    {
      key: "CONDENSER_OUT_EB102_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    43997,
    {
      key: "HOT_GAS_EB102_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    43998,
    {
      key: "LIQUID_LINE_EB102_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    43999,
    {
      key: "SUCTION_GAS_EB102_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    44000,
    {
      key: "OIL_TEMPERATURE_EB102_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    44001,
    {
      key: "LOW_PRESS_TRANSMIT_EB102_EP14_BP8",
    },
  ],
  [
    44002,
    {
      key: "COMPRESSOR_STATE_EB102_EP14",
    },
  ],
  [
    44003,
    {
      key: "COMPR_TIME_TO_START_EB102_EP14",
    },
  ],
  [
    44004,
    {
      key: "RELAY_STATUS_EB102_EP14",
    },
  ],
  [
    44005,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB102_EP14",
    },
  ],
  [
    44006,
    {
      key: "BRINE_PUMP_SPEED_EB102_EP14",
    },
  ],
  [
    44007,
    {
      key: "COMPRESSOR_STARTS_EB102_EP14",
    },
  ],
  [
    44009,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB102_EP14",
    },
  ],
  [
    44011,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB102_EP14",
    },
  ],
  [
    44013,
    {
      key: "ALARM_NUMBER_EB102_EP14",
    },
  ],
  [
    44014,
    {
      key: "VERSION_EB101",
    },
  ],
  [
    44015,
    {
      key: "INITIALIZED_EB101",
    },
  ],
  [
    44016,
    {
      key: "_EB101",
    },
  ],
  [
    44017,
    {
      key: "_EB101",
    },
  ],
  [
    44018,
    {
      key: "_EB101",
    },
  ],
  [
    44019,
    {
      key: "_EB101",
    },
  ],
  [
    44020,
    {
      key: "_EB101",
    },
  ],
  [
    44021,
    {
      key: "_EB101",
    },
  ],
  [
    44022,
    {
      key: "_EB101",
    },
  ],
  [
    44023,
    {
      key: "_EB101",
    },
  ],
  [
    44024,
    {
      key: "_EB101",
    },
  ],
  [
    44025,
    {
      key: "_EB101",
    },
  ],
  [
    44026,
    {
      key: "_EB101",
    },
  ],
  [
    44027,
    {
      key: "_EB101",
    },
  ],
  [
    44028,
    {
      key: "_EB101",
    },
  ],
  [
    44029,
    {
      key: "_EB101",
    },
  ],
  [
    44030,
    {
      key: "_EB101",
    },
  ],
  [
    44031,
    {
      key: "_EB101",
    },
  ],
  [
    44032,
    {
      key: "SLAVE_TYPE_EB101",
    },
  ],
  [
    44033,
    {
      key: "COMPRESSOR_SIZE_EB101",
      divideBy: 10,
    },
  ],
  [
    44034,
    {
      key: "RETURN_TEMP_EB101_EP15_BT3",
      divideBy: 10,
    },
  ],
  [
    44035,
    {
      key: "BRINE_IN_EB101_EP15_BT10",
      divideBy: 10,
    },
  ],
  [
    44036,
    {
      key: "BRINE_OUT_EB101_EP15_BT11",
      divideBy: 10,
    },
  ],
  [
    44037,
    {
      key: "CONDENSER_OUT_EB101_EP15_BT12",
      divideBy: 10,
    },
  ],
  [
    44038,
    {
      key: "HOT_GAS_EB101_EP15_BT14",
      divideBy: 10,
    },
  ],
  [
    44039,
    {
      key: "LIQUID_LINE_EB101_EP15_BT15",
      divideBy: 10,
    },
  ],
  [
    44040,
    {
      key: "SUCTION_GAS_EB101_EP15_BT17",
      divideBy: 10,
    },
  ],
  [
    44041,
    {
      key: "OIL_TEMPERATURE_EB101_EP15_BT29",
      divideBy: 10,
    },
  ],
  [
    44042,
    {
      key: "LOW_PRESS_TRANSMIT_EB101_EP15_BP8",
    },
  ],
  [
    44043,
    {
      key: "COMPRESSOR_STATE_EB101_EP15",
    },
  ],
  [
    44044,
    {
      key: "COMPR_TIME_TO_START_EB101_EP15",
    },
  ],
  [
    44045,
    {
      key: "RELAY_STATUS_EB101_EP15",
    },
  ],
  [
    44046,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB101_EP15",
    },
  ],
  [
    44047,
    {
      key: "BRINE_PUMP_SPEED_EB101_EP15",
    },
  ],
  [
    44048,
    {
      key: "COMPRESSOR_STARTS_EB101_EP15",
    },
  ],
  [
    44050,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB101_EP15",
    },
  ],
  [
    44052,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB101_EP15",
    },
  ],
  [
    44054,
    {
      key: "ALARM_NUMBER_EB101_EP15",
    },
  ],
  [
    44055,
    {
      key: "RETURN_TEMP_EB101_EP14_BT3",
      divideBy: 10,
    },
  ],
  [
    44056,
    {
      key: "BRINE_IN_EB101_EP14_BT10",
      divideBy: 10,
    },
  ],
  [
    44057,
    {
      key: "BRINE_OUT_EB101_EP14_BT11",
      divideBy: 10,
    },
  ],
  [
    44058,
    {
      key: "CONDENSER_OUT_EB101_EP14_BT12",
      divideBy: 10,
    },
  ],
  [
    44059,
    {
      key: "HOT_GAS_EB101_EP14_BT14",
      divideBy: 10,
    },
  ],
  [
    44060,
    {
      key: "LIQUID_LINE_EB101_EP14_BT15",
      divideBy: 10,
    },
  ],
  [
    44061,
    {
      key: "SUCTION_GAS_EB101_EP14_BT17",
      divideBy: 10,
    },
  ],
  [
    44062,
    {
      key: "OIL_TEMPERATURE_EB101_EP14_BT29",
      divideBy: 10,
    },
  ],
  [
    44063,
    {
      key: "LOW_PRESS_TRANSMIT_EB101_EP14_BP8",
    },
  ],
  [
    44064,
    {
      key: "COMPRESSOR_STATE_EB101_EP14",
    },
  ],
  [
    44065,
    {
      key: "COMPR_TIME_TO_START_EB101_EP14",
    },
  ],
  [
    44066,
    {
      key: "RELAY_STATUS_EB101_EP14",
    },
  ],
  [
    44067,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM_EB101_EP14",
    },
  ],
  [
    44068,
    {
      key: "BRINE_PUMP_SPEED_EB101_EP14",
    },
  ],
  [
    44069,
    {
      key: "COMPRESSOR_STARTS_EB101_EP14",
    },
  ],
  [
    44071,
    {
      key: "COMPRESSOR_OPERATING_TIME_EB101_EP14",
    },
  ],
  [
    44073,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER_EB101_EP14",
    },
  ],
  [
    44075,
    {
      key: "ALARM_NUMBER_EB101_EP14",
    },
  ],
  [
    44076,
    {
      key: "VERSION",
    },
  ],
  [
    44095,
    {
      key: "COMPRESSOR_SIZE",
      divideBy: 10,
    },
  ],
  [
    44096,
    {
      key: "RETURN_TEMP",
      divideBy: 10,
    },
  ],
  [
    44097,
    {
      key: "BRINE_IN",
      divideBy: 10,
    },
  ],
  [
    44098,
    {
      key: "BRINE_OUT",
      divideBy: 10,
    },
  ],
  [
    44099,
    {
      key: "CONDENSER_OUT",
      divideBy: 10,
    },
  ],
  [
    44100,
    {
      key: "HOT_GAS",
      divideBy: 10,
    },
  ],
  [
    44101,
    {
      key: "LIQUID_LINE",
      divideBy: 10,
    },
  ],
  [
    44102,
    {
      key: "SUCTION_GAS",
      divideBy: 10,
    },
  ],
  [
    44103,
    {
      key: "OIL_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    44108,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM",
    },
  ],
  [
    44109,
    {
      key: "BRINE_PUMP_SPEED",
    },
  ],
  [
    44110,
    {
      key: "COMPRESSOR_STARTS",
    },
  ],
  [
    44112,
    {
      key: "COMPRESSOR_OPERATING_TIME",
    },
  ],
  [
    44114,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER",
    },
  ],
  [
    44116,
    {
      key: "ALARM_NUMBER_EB100_EP15",
    },
  ],
  [
    44117,
    {
      key: "RETURN_TEMP",
      divideBy: 10,
    },
  ],
  [
    44118,
    {
      key: "BRINE_IN",
      divideBy: 10,
    },
  ],
  [
    44119,
    {
      key: "BRINE_OUT",
      divideBy: 10,
    },
  ],
  [
    44120,
    {
      key: "CONDENSER_OUT",
      divideBy: 10,
    },
  ],
  [
    44121,
    {
      key: "HOT_GAS",
      divideBy: 10,
    },
  ],
  [
    44122,
    {
      key: "LIQUID_LINE",
      divideBy: 10,
    },
  ],
  [
    44123,
    {
      key: "SUCTION_GAS",
      divideBy: 10,
    },
  ],
  [
    44124,
    {
      key: "OIL_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    44129,
    {
      key: "PUMP_SPEED_HEATING_MEDIUM",
    },
  ],
  [
    44130,
    {
      key: "BRINE_PUMP_SPEED",
    },
  ],
  [
    44131,
    {
      key: "COMPRESSOR_STARTS",
    },
  ],
  [
    44133,
    {
      key: "COMPRESSOR_OPERATING_TIME",
    },
  ],
  [
    44135,
    {
      key: "COMPRESSOR_OPERATING_TIME_HOT_WATER",
    },
  ],
  [
    44137,
    {
      key: "ALARM_NUMBER_EB100_EP14",
    },
  ],
  [
    44138,
    {
      key: "PRIO_EB108_EP15",
    },
  ],
  [
    44139,
    {
      key: "PRIO_EB108_EP14",
    },
  ],
  [
    44140,
    {
      key: "_EB108",
    },
  ],
  [
    44141,
    {
      key: "_EB108",
    },
  ],
  [
    44142,
    {
      key: "_EB108",
    },
  ],
  [
    44143,
    {
      key: "_EB108",
    },
  ],
  [
    44144,
    {
      key: "_EB108",
    },
  ],
  [
    44145,
    {
      key: "_EB108",
    },
  ],
  [
    44146,
    {
      key: "_EB108",
    },
  ],
  [
    44147,
    {
      key: "_EB108",
    },
  ],
  [
    44148,
    {
      key: "_EB108",
    },
  ],
  [
    44149,
    {
      key: "_EB108",
    },
  ],
  [
    44150,
    {
      key: "_EB108",
    },
  ],
  [
    44151,
    {
      key: "PRIO_EB107_EP15",
    },
  ],
  [
    44152,
    {
      key: "PRIO_EB107_EP14",
    },
  ],
  [
    44153,
    {
      key: "_EB107",
    },
  ],
  [
    44154,
    {
      key: "_EB107",
    },
  ],
  [
    44155,
    {
      key: "_EB107",
    },
  ],
  [
    44156,
    {
      key: "_EB107",
    },
  ],
  [
    44157,
    {
      key: "_EB107",
    },
  ],
  [
    44158,
    {
      key: "_EB107",
    },
  ],
  [
    44159,
    {
      key: "_EB107",
    },
  ],
  [
    44160,
    {
      key: "_EB107",
    },
  ],
  [
    44161,
    {
      key: "_EB107",
    },
  ],
  [
    44162,
    {
      key: "_EB107",
    },
  ],
  [
    44163,
    {
      key: "_EB107",
    },
  ],
  [
    44164,
    {
      key: "PRIO_EB106_EP15",
    },
  ],
  [
    44165,
    {
      key: "PRIO_EB106_EP14",
    },
  ],
  [
    44166,
    {
      key: "_EB106",
    },
  ],
  [
    44167,
    {
      key: "_EB106",
    },
  ],
  [
    44168,
    {
      key: "_EB106",
    },
  ],
  [
    44169,
    {
      key: "_EB106",
    },
  ],
  [
    44170,
    {
      key: "_EB106",
    },
  ],
  [
    44171,
    {
      key: "_EB106",
    },
  ],
  [
    44172,
    {
      key: "_EB106",
    },
  ],
  [
    44173,
    {
      key: "_EB106",
    },
  ],
  [
    44174,
    {
      key: "_EB106",
    },
  ],
  [
    44175,
    {
      key: "_EB106",
    },
  ],
  [
    44176,
    {
      key: "_EB106",
    },
  ],
  [
    44177,
    {
      key: "PRIO_EB105_EP15",
    },
  ],
  [
    44178,
    {
      key: "PRIO_EB105_EP14",
    },
  ],
  [
    44179,
    {
      key: "_EB105",
    },
  ],
  [
    44180,
    {
      key: "_EB105",
    },
  ],
  [
    44181,
    {
      key: "_EB105",
    },
  ],
  [
    44182,
    {
      key: "_EB105",
    },
  ],
  [
    44183,
    {
      key: "_EB105",
    },
  ],
  [
    44184,
    {
      key: "_EB105",
    },
  ],
  [
    44185,
    {
      key: "_EB105",
    },
  ],
  [
    44186,
    {
      key: "_EB105",
    },
  ],
  [
    44187,
    {
      key: "_EB105",
    },
  ],
  [
    44188,
    {
      key: "_EB105",
    },
  ],
  [
    44189,
    {
      key: "_EB105",
    },
  ],
  [
    44190,
    {
      key: "PRIO_EB104_EP15",
    },
  ],
  [
    44191,
    {
      key: "PRIO_EB104_EP14",
    },
  ],
  [
    44192,
    {
      key: "_EB104",
    },
  ],
  [
    44193,
    {
      key: "_EB104",
    },
  ],
  [
    44194,
    {
      key: "_EB104",
    },
  ],
  [
    44195,
    {
      key: "_EB104",
    },
  ],
  [
    44196,
    {
      key: "_EB104",
    },
  ],
  [
    44197,
    {
      key: "_EB104",
    },
  ],
  [
    44198,
    {
      key: "_EB104",
    },
  ],
  [
    44199,
    {
      key: "_EB104",
    },
  ],
  [
    44200,
    {
      key: "_EB104",
    },
  ],
  [
    44201,
    {
      key: "_EB104",
    },
  ],
  [
    44202,
    {
      key: "_EB104",
    },
  ],
  [
    44203,
    {
      key: "PRIO_EB103_EP15",
    },
  ],
  [
    44204,
    {
      key: "PRIO_EB103_EP14",
    },
  ],
  [
    44205,
    {
      key: "_EB103",
    },
  ],
  [
    44206,
    {
      key: "_EB103",
    },
  ],
  [
    44207,
    {
      key: "_EB103",
    },
  ],
  [
    44208,
    {
      key: "_EB103",
    },
  ],
  [
    44209,
    {
      key: "_EB103",
    },
  ],
  [
    44210,
    {
      key: "_EB103",
    },
  ],
  [
    44211,
    {
      key: "_EB103",
    },
  ],
  [
    44212,
    {
      key: "_EB103",
    },
  ],
  [
    44213,
    {
      key: "_EB103",
    },
  ],
  [
    44214,
    {
      key: "_EB103",
    },
  ],
  [
    44215,
    {
      key: "_EB103",
    },
  ],
  [
    44216,
    {
      key: "PRIO_EB102_EP15",
    },
  ],
  [
    44217,
    {
      key: "PRIO_EB102_EP14",
    },
  ],
  [
    44218,
    {
      key: "_EB102",
    },
  ],
  [
    44219,
    {
      key: "_EB102",
    },
  ],
  [
    44220,
    {
      key: "_EB102",
    },
  ],
  [
    44221,
    {
      key: "_EB102",
    },
  ],
  [
    44222,
    {
      key: "_EB102",
    },
  ],
  [
    44223,
    {
      key: "_EB102",
    },
  ],
  [
    44224,
    {
      key: "_EB102",
    },
  ],
  [
    44225,
    {
      key: "_EB102",
    },
  ],
  [
    44226,
    {
      key: "_EB102",
    },
  ],
  [
    44227,
    {
      key: "_EB102",
    },
  ],
  [
    44228,
    {
      key: "_EB102",
    },
  ],
  [
    44229,
    {
      key: "PRIO_EB101_EP15",
    },
  ],
  [
    44230,
    {
      key: "PRIO_EB101_EP14",
    },
  ],
  [
    44231,
    {
      key: "_EB101",
    },
  ],
  [
    44232,
    {
      key: "_EB101",
    },
  ],
  [
    44233,
    {
      key: "_EB101",
    },
  ],
  [
    44234,
    {
      key: "_EB101",
    },
  ],
  [
    44235,
    {
      key: "_EB101",
    },
  ],
  [
    44236,
    {
      key: "_EB101",
    },
  ],
  [
    44237,
    {
      key: "_EB101",
    },
  ],
  [
    44238,
    {
      key: "_EB101",
    },
  ],
  [
    44239,
    {
      key: "_EB101",
    },
  ],
  [
    44240,
    {
      key: "_EB101",
    },
  ],
  [
    44241,
    {
      key: "_EB101",
    },
  ],
  [
    44242,
    {
      key: "PRIO_EB100_EP15",
    },
  ],
  [
    44243,
    {
      key: "PRIO_EB100_EP14",
    },
  ],
  [
    44244,
    {
      key: "_EB100",
    },
  ],
  [
    44245,
    {
      key: "_EB100",
    },
  ],
  [
    44246,
    {
      key: "_EB100",
    },
  ],
  [
    44247,
    {
      key: "_EB100",
    },
  ],
  [
    44248,
    {
      key: "_EB100",
    },
  ],
  [
    44249,
    {
      key: "_EB100",
    },
  ],
  [
    44250,
    {
      key: "_EB100",
    },
  ],
  [
    44251,
    {
      key: "_EB100",
    },
  ],
  [
    44252,
    {
      key: "_EB100",
    },
  ],
  [
    44253,
    {
      key: "_EB100",
    },
  ],
  [
    44254,
    {
      key: "_EB100",
    },
  ],
  [
    44256,
    {
      key: "BLOCKED",
    },
  ],
  [
    44258,
    {
      key: "EXTERNAL_SUPPLY_AIR_ACCESSORY_RELAYS",
    },
  ],
  [
    44259,
    {
      key: "NEXT_PERIODIC_INCREASE",
    },
  ],
  [
    44262,
    {
      key: "BLOCKED_COMPRESSORS",
    },
  ],
  [
    44266,
    {
      key: "DEGREE_MINUTES_COOLING",
    },
  ],
  [
    44267,
    {
      key: "CALCULATED_FLOW_TEMP_S4",
      divideBy: 10,
    },
  ],
  [
    44268,
    {
      key: "CALCULATED_FLOW_TEMP_S3",
      divideBy: 10,
    },
  ],
  [
    44269,
    {
      key: "CALCULATED_FLOW_TEMP_S2",
      divideBy: 10,
    },
  ],
  [
    44270,
    {
      key: "CALCULATED_FLOW_TEMP_S1",
      divideBy: 10,
    },
  ],
  [
    44276,
    {
      key: "STATUS",
    },
  ],
  [
    44277,
    {
      key: "STATE_ACS_HEAT_DUMP_EQ1_QN25",
    },
  ],
  [
    44278,
    {
      key: "STATE_ACS_COOL_DUMP_EQ1_QN18",
    },
  ],
  [
    44282,
    {
      key: "USED_CPRS_HW",
    },
  ],
  [
    44283,
    {
      key: "USED_CPRS_HEAT",
    },
  ],
  [
    44284,
    {
      key: "USED_CPRS_POOL_1",
    },
  ],
  [
    44285,
    {
      key: "USED_CPRS_POOL_2",
    },
  ],
  [
    44298,
    {
      key: "HW_INCL_INT_ADD_EP14",
      divideBy: 10,
    },
  ],
  [
    44300,
    {
      key: "HEATING_INT_ADD_INCL_EP14",
      divideBy: 10,
    },
  ],
  [
    44302,
    {
      key: "COOLING_COMPR_ONLY_EP14",
      divideBy: 10,
    },
  ],
  [
    44304,
    {
      key: "POOL_COMPR_ONLY_EP14",
      divideBy: 10,
    },
  ],
  [
    44306,
    {
      key: "HOTWATER_COMPR_ONLY_EP14",
      divideBy: 10,
    },
  ],
  [
    44308,
    {
      key: "HEATING_COMPR_ONLY_EP14",
      divideBy: 10,
    },
  ],
  [
    44316,
    {
      key: "REQUESTED_COMPRESSOR_FREQ",
    },
  ],
  [
    44317,
    {
      key: "SCA_ACCESSORY_RELAYS",
    },
  ],
  [
    44320,
    {
      key: "USED_CPRS_COOL",
    },
  ],
  [
    44322,
    {
      key: "SPEED_EXT_COOLING_PUMP_GP12",
    },
  ],
  [
    44323,
    {
      key: "COOLING_PUMP_MANUAL_SPEED",
    },
  ],
  [
    44331,
    {
      key: "SOFTWARE_RELEASE",
    },
  ],
  [
    44332,
    {
      key: "OUTDOOR_TEMP_EB108_EP15_BT28",
      divideBy: 10,
    },
  ],
  [
    44333,
    {
      key: "EVAPORATOR_EB108_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44334,
    {
      key: "OUTDOOR_TEMP_EB108_EP14_BT28",
      divideBy: 10,
    },
  ],
  [
    44335,
    {
      key: "EVAPORATOR_EB108_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44336,
    {
      key: "OUTDOOR_TEMP_EB107_EP15_BT28",
      divideBy: 10,
    },
  ],
  [
    44337,
    {
      key: "EVAPORATOR_EB107_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44338,
    {
      key: "OUTDOOR_TEMP_EB107_EP14_BT28",
      divideBy: 10,
    },
  ],
  [
    44339,
    {
      key: "EVAPORATOR_EB107_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44340,
    {
      key: "OUTDOOR_TEMP_EB106_EP15_BT28",
      divideBy: 10,
    },
  ],
  [
    44341,
    {
      key: "EVAPORATOR_EB106_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44342,
    {
      key: "OUTDOOR_TEMP_EB106_EP14_BT28",
      divideBy: 10,
    },
  ],
  [
    44343,
    {
      key: "EVAPORATOR_EB106_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44344,
    {
      key: "OUTDOOR_TEMP_EB105_EP15_BT28",
      divideBy: 10,
    },
  ],
  [
    44345,
    {
      key: "EVAPORATOR_EB105_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44346,
    {
      key: "OUTDOOR_TEMP_EB105_EP14_BT28",
      divideBy: 10,
    },
  ],
  [
    44347,
    {
      key: "EVAPORATOR_EB105_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44348,
    {
      key: "OUTDOOR_TEMP_EB104_EP15_BT28",
      divideBy: 10,
    },
  ],
  [
    44349,
    {
      key: "EVAPORATOR_EB104_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44350,
    {
      key: "OUTDOOR_TEMP_EB104_EP14_BT28",
      divideBy: 10,
    },
  ],
  [
    44351,
    {
      key: "EVAPORATOR_EB104_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44352,
    {
      key: "OUTDOOR_TEMP_EB103_EP15_BT28",
      divideBy: 10,
    },
  ],
  [
    44353,
    {
      key: "EVAPORATOR_EB103_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44354,
    {
      key: "OUTDOOR_TEMP_EB103_EP14_BT28",
      divideBy: 10,
    },
  ],
  [
    44355,
    {
      key: "EVAPORATOR_EB103_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44356,
    {
      key: "OUTDOOR_TEMP_EB102_EP15_BT28",
      divideBy: 10,
    },
  ],
  [
    44357,
    {
      key: "EVAPORATOR_EB102_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44358,
    {
      key: "OUTDOOR_TEMP_EB102_EP14_BT28",
      divideBy: 10,
    },
  ],
  [
    44359,
    {
      key: "EVAPORATOR_EB102_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44360,
    {
      key: "OUTDOOR_TEMP_EB101_EP15_BT28",
      divideBy: 10,
    },
  ],
  [
    44361,
    {
      key: "EVAPORATOR_EB101_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44362,
    {
      key: "OUTDOOR_TEMP_EB101_EP14_BT28",
      divideBy: 10,
    },
  ],
  [
    44363,
    {
      key: "EVAPORATOR_EB101_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44364,
    {
      key: "OUTDOOR_TEMP",
      divideBy: 10,
    },
  ],
  [
    44365,
    {
      key: "EVAPORATOR",
      divideBy: 10,
    },
  ],
  [
    44366,
    {
      key: "OUTDOOR_TEMP",
      divideBy: 10,
    },
  ],
  [
    44367,
    {
      key: "EVAPORATOR",
      divideBy: 10,
    },
  ],
  [
    44379,
    {
      key: "PUMP_EXT_ADDITION",
    },
  ],
  [
    44380,
    {
      key: "DOCKED_EXTERNAL_COMPRESSORS",
    },
  ],
  [
    44381,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    44382,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    44383,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    44384,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    44385,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    44386,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    44387,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    44388,
    {
      key: "CEDED_OU_EFFECT",
      divideBy: 10,
    },
  ],
  [
    44389,
    {
      key: "CHARGE_PUMP_SPEED_EB108",
    },
  ],
  [
    44390,
    {
      key: "CHARGE_PUMP_SPEED_EB107",
    },
  ],
  [
    44391,
    {
      key: "CHARGE_PUMP_SPEED_EB106",
    },
  ],
  [
    44392,
    {
      key: "CHARGE_PUMP_SPEED_EB105",
    },
  ],
  [
    44393,
    {
      key: "CHARGE_PUMP_SPEED_EB104",
    },
  ],
  [
    44394,
    {
      key: "CHARGE_PUMP_SPEED_EB103",
    },
  ],
  [
    44395,
    {
      key: "CHARGE_PUMP_SPEED_EB102",
    },
  ],
  [
    44396,
    {
      key: "CHARGE_PUMP_SPEED_EB101",
    },
  ],
  [
    44397,
    {
      key: "CHARGE_PUMP_SPEED",
    },
  ],
  [
    44410,
    {
      key: "BIT_REGISTER_EB108",
    },
  ],
  [
    44411,
    {
      key: "HOT_WATER_CHARGING_EB108_BT6",
      divideBy: 10,
    },
  ],
  [
    44412,
    {
      key: "HOT_WATER_TOP_EB108_BT7",
      divideBy: 10,
    },
  ],
  [
    44413,
    {
      key: "HEAT_MEDIUM_FLOW_EB108_BT2",
      divideBy: 10,
    },
  ],
  [
    44414,
    {
      key: "COMPRESSOR_STATE_EB108_EP15",
    },
  ],
  [
    44415,
    {
      key: "COMPRESSOR_STATE_EB108_EP14",
    },
  ],
  [
    44416,
    {
      key: "BIT_REGISTER_EB107",
    },
  ],
  [
    44417,
    {
      key: "HOT_WATER_CHARGING_EB107_BT6",
      divideBy: 10,
    },
  ],
  [
    44418,
    {
      key: "HOT_WATER_TOP_EB107_BT7",
      divideBy: 10,
    },
  ],
  [
    44419,
    {
      key: "HEAT_MEDIUM_FLOW_EB107_BT2",
      divideBy: 10,
    },
  ],
  [
    44420,
    {
      key: "COMPRESSOR_STATE_EB107_EP15",
    },
  ],
  [
    44421,
    {
      key: "COMPRESSOR_STATE_EB107_EP14",
    },
  ],
  [
    44422,
    {
      key: "BIT_REGISTER_EB106",
    },
  ],
  [
    44423,
    {
      key: "HOT_WATER_CHARGING_EB106_BT6",
      divideBy: 10,
    },
  ],
  [
    44424,
    {
      key: "HOT_WATER_TOP_EB106_BT7",
      divideBy: 10,
    },
  ],
  [
    44425,
    {
      key: "HEAT_MEDIUM_FLOW_EB106_BT2",
      divideBy: 10,
    },
  ],
  [
    44426,
    {
      key: "COMPRESSOR_STATE_EB106_EP15",
    },
  ],
  [
    44427,
    {
      key: "COMPRESSOR_STATE_EB106_EP14",
    },
  ],
  [
    44428,
    {
      key: "BIT_REGISTER_EB105",
    },
  ],
  [
    44429,
    {
      key: "HOT_WATER_CHARGING_EB105_BT6",
      divideBy: 10,
    },
  ],
  [
    44430,
    {
      key: "HOT_WATER_TOP_EB105_BT7",
      divideBy: 10,
    },
  ],
  [
    44431,
    {
      key: "HEAT_MEDIUM_FLOW_EB105_BT2",
      divideBy: 10,
    },
  ],
  [
    44432,
    {
      key: "COMPRESSOR_STATE_EB105_EP15",
    },
  ],
  [
    44433,
    {
      key: "COMPRESSOR_STATE_EB105_EP14",
    },
  ],
  [
    44434,
    {
      key: "BIT_REGISTER_EB104",
    },
  ],
  [
    44435,
    {
      key: "HOT_WATER_CHARGING_EB104_BT6",
      divideBy: 10,
    },
  ],
  [
    44436,
    {
      key: "HOT_WATER_TOP_EB104_BT7",
      divideBy: 10,
    },
  ],
  [
    44437,
    {
      key: "HEAT_MEDIUM_FLOW_EB104_BT2",
      divideBy: 10,
    },
  ],
  [
    44438,
    {
      key: "COMPRESSOR_STATE_EB104_EP15",
    },
  ],
  [
    44439,
    {
      key: "COMPRESSOR_STATE_EB104_EP14",
    },
  ],
  [
    44440,
    {
      key: "BIT_REGISTER_EB103",
    },
  ],
  [
    44441,
    {
      key: "HOT_WATER_CHARGING_EB103_BT6",
      divideBy: 10,
    },
  ],
  [
    44442,
    {
      key: "HOT_WATER_TOP_EB103_BT7",
      divideBy: 10,
    },
  ],
  [
    44443,
    {
      key: "HEAT_MEDIUM_FLOW_EB103_BT2",
      divideBy: 10,
    },
  ],
  [
    44444,
    {
      key: "COMPRESSOR_STATE_EB103_EP15",
    },
  ],
  [
    44445,
    {
      key: "COMPRESSOR_STATE_EB103_EP14",
    },
  ],
  [
    44446,
    {
      key: "BIT_REGISTER_EB102",
    },
  ],
  [
    44447,
    {
      key: "HOT_WATER_CHARGING_EB102_BT6",
      divideBy: 10,
    },
  ],
  [
    44448,
    {
      key: "HOT_WATER_TOP_EB102_BT7",
      divideBy: 10,
    },
  ],
  [
    44449,
    {
      key: "HEAT_MEDIUM_FLOW_EB102_BT2",
      divideBy: 10,
    },
  ],
  [
    44450,
    {
      key: "COMPRESSOR_STATE_EB102_EP15",
    },
  ],
  [
    44451,
    {
      key: "COMPRESSOR_STATE_EB102_EP14",
    },
  ],
  [
    44452,
    {
      key: "BIT_REGISTER_EB101",
    },
  ],
  [
    44453,
    {
      key: "HOT_WATER_CHARGING_EB101_BT6",
      divideBy: 10,
    },
  ],
  [
    44454,
    {
      key: "HOT_WATER_TOP_EB101_BT7",
      divideBy: 10,
    },
  ],
  [
    44455,
    {
      key: "HEAT_MEDIUM_FLOW_EB101_BT2",
      divideBy: 10,
    },
  ],
  [
    44456,
    {
      key: "COMPRESSOR_STATE_EB101_EP15",
    },
  ],
  [
    44457,
    {
      key: "COMPRESSOR_STATE_EB101_EP14",
    },
  ],
  [
    44464,
    {
      key: "_EB108",
    },
  ],
  [
    44465,
    {
      key: "_EB108",
    },
  ],
  [
    44466,
    {
      key: "_EB107",
    },
  ],
  [
    44467,
    {
      key: "_EB107",
    },
  ],
  [
    44468,
    {
      key: "_EB106",
    },
  ],
  [
    44469,
    {
      key: "_EB106",
    },
  ],
  [
    44470,
    {
      key: "_EB105",
    },
  ],
  [
    44471,
    {
      key: "_EB105",
    },
  ],
  [
    44472,
    {
      key: "_EB104",
    },
  ],
  [
    44473,
    {
      key: "_EB104",
    },
  ],
  [
    44474,
    {
      key: "_EB103",
    },
  ],
  [
    44475,
    {
      key: "_EB103",
    },
  ],
  [
    44476,
    {
      key: "_EB102",
    },
  ],
  [
    44477,
    {
      key: "_EB102",
    },
  ],
  [
    44478,
    {
      key: "_EB101",
    },
  ],
  [
    44479,
    {
      key: "_EB101",
    },
  ],
  [
    44480,
    {
      key: "_EB100",
    },
  ],
  [
    44481,
    {
      key: "_EB100",
    },
  ],
  [
    44483,
    {
      key: "STATE_OF_THE_EXTRA_ADDITIONAL_HEAT_IN_SERIES",
    },
  ],
  [
    44487,
    {
      key: "DOCKED_COOL_COMPRESSORS",
    },
  ],
  [
    44488,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB108_EP15",
    },
  ],
  [
    44489,
    {
      key: "HIGH_PRESSURE_SENSOR_EB108_EP15",
    },
  ],
  [
    44490,
    {
      key: "LOW_PRESSURE_SENSOR_EB108_EP15",
    },
  ],
  [
    44491,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    44492,
    {
      key: "CPR_PROTECTION_MODE_EB108_EP15",
    },
  ],
  [
    44493,
    {
      key: "DEFROSTING_EB108_EP15",
    },
  ],
  [
    44494,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    44495,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    44496,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    44497,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    44498,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB108_EP15",
    },
  ],
  [
    44499,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB108_EP15",
    },
  ],
  [
    44500,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB108_EP15",
    },
  ],
  [
    44501,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB108_EP15",
    },
  ],
  [
    44502,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB108_EP14",
    },
  ],
  [
    44503,
    {
      key: "HIGH_PRESSURE_SENSOR_EB108_EP14",
    },
  ],
  [
    44504,
    {
      key: "LOW_PRESSURE_SENSOR_EB108_EP14",
    },
  ],
  [
    44505,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    44506,
    {
      key: "CPR_PROTECTION_MODE_EB108_EP14",
    },
  ],
  [
    44507,
    {
      key: "DEFROSTING_EB108_EP14",
    },
  ],
  [
    44508,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    44509,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    44510,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    44511,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    44512,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB108_EP14",
    },
  ],
  [
    44513,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB108_EP14",
    },
  ],
  [
    44514,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB108_EP14",
    },
  ],
  [
    44515,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB108_EP14",
    },
  ],
  [
    44516,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB107_EP15",
    },
  ],
  [
    44517,
    {
      key: "HIGH_PRESSURE_SENSOR_EB107_EP15",
    },
  ],
  [
    44518,
    {
      key: "LOW_PRESSURE_SENSOR_EB107_EP15",
    },
  ],
  [
    44519,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    44520,
    {
      key: "CPR_PROTECTION_MODE_EB107_EP15",
    },
  ],
  [
    44521,
    {
      key: "DEFROSTING_EB107_EP15",
    },
  ],
  [
    44522,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    44523,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    44524,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    44525,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    44526,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB107_EP15",
    },
  ],
  [
    44527,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB107_EP15",
    },
  ],
  [
    44528,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB107_EP15",
    },
  ],
  [
    44529,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB107_EP15",
    },
  ],
  [
    44530,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB107_EP14",
    },
  ],
  [
    44531,
    {
      key: "HIGH_PRESSURE_SENSOR_EB107_EP14",
    },
  ],
  [
    44532,
    {
      key: "LOW_PRESSURE_SENSOR_EB107_EP14",
    },
  ],
  [
    44533,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    44534,
    {
      key: "CPR_PROTECTION_MODE_EB107_EP14",
    },
  ],
  [
    44535,
    {
      key: "DEFROSTING_EB107_EP14",
    },
  ],
  [
    44536,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    44537,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    44538,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    44539,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    44540,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB107_EP14",
    },
  ],
  [
    44541,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB107_EP14",
    },
  ],
  [
    44542,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB107_EP14",
    },
  ],
  [
    44543,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB107_EP14",
    },
  ],
  [
    44544,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB106_EP15",
    },
  ],
  [
    44545,
    {
      key: "HIGH_PRESSURE_SENSOR_EB106_EP15",
    },
  ],
  [
    44546,
    {
      key: "LOW_PRESSURE_SENSOR_EB106_EP15",
    },
  ],
  [
    44547,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    44548,
    {
      key: "CPR_PROTECTION_MODE_EB106_EP15",
    },
  ],
  [
    44549,
    {
      key: "DEFROSTING_EB106_EP15",
    },
  ],
  [
    44550,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    44551,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    44552,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    44553,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    44554,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB106_EP15",
    },
  ],
  [
    44555,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB106_EP15",
    },
  ],
  [
    44556,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB106_EP15",
    },
  ],
  [
    44557,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB106_EP15",
    },
  ],
  [
    44558,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB106_EP14",
    },
  ],
  [
    44559,
    {
      key: "HIGH_PRESSURE_SENSOR_EB106_EP14",
    },
  ],
  [
    44560,
    {
      key: "LOW_PRESSURE_SENSOR_EB106_EP14",
    },
  ],
  [
    44561,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    44562,
    {
      key: "CPR_PROTECTION_MODE_EB106_EP14",
    },
  ],
  [
    44563,
    {
      key: "DEFROSTING_EB106_EP14",
    },
  ],
  [
    44564,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    44565,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    44566,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    44567,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    44568,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB106_EP14",
    },
  ],
  [
    44569,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB106_EP14",
    },
  ],
  [
    44570,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB106_EP14",
    },
  ],
  [
    44571,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB106_EP14",
    },
  ],
  [
    44572,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB105_EP15",
    },
  ],
  [
    44573,
    {
      key: "HIGH_PRESSURE_SENSOR_EB105_EP15",
    },
  ],
  [
    44574,
    {
      key: "LOW_PRESSURE_SENSOR_EB105_EP15",
    },
  ],
  [
    44575,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    44576,
    {
      key: "CPR_PROTECTION_MODE_EB105_EP15",
    },
  ],
  [
    44577,
    {
      key: "DEFROSTING_EB105_EP15",
    },
  ],
  [
    44578,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    44579,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    44580,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    44581,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    44582,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB105_EP15",
    },
  ],
  [
    44583,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB105_EP15",
    },
  ],
  [
    44584,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB105_EP15",
    },
  ],
  [
    44585,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB105_EP15",
    },
  ],
  [
    44586,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB105_EP14",
    },
  ],
  [
    44587,
    {
      key: "HIGH_PRESSURE_SENSOR_EB105_EP14",
    },
  ],
  [
    44588,
    {
      key: "LOW_PRESSURE_SENSOR_EB105_EP14",
    },
  ],
  [
    44589,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    44590,
    {
      key: "CPR_PROTECTION_MODE_EB105_EP14",
    },
  ],
  [
    44591,
    {
      key: "DEFROSTING_EB105_EP14",
    },
  ],
  [
    44592,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    44593,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    44594,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    44595,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    44596,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB105_EP14",
    },
  ],
  [
    44597,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB105_EP14",
    },
  ],
  [
    44598,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB105_EP14",
    },
  ],
  [
    44599,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB105_EP14",
    },
  ],
  [
    44600,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB104_EP15",
    },
  ],
  [
    44601,
    {
      key: "HIGH_PRESSURE_SENSOR_EB104_EP15",
    },
  ],
  [
    44602,
    {
      key: "LOW_PRESSURE_SENSOR_EB104_EP15",
    },
  ],
  [
    44603,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    44604,
    {
      key: "CPR_PROTECTION_MODE_EB104_EP15",
    },
  ],
  [
    44605,
    {
      key: "DEFROSTING_EB104_EP15",
    },
  ],
  [
    44606,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    44607,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    44608,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    44609,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    44610,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB104_EP15",
    },
  ],
  [
    44611,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB104_EP15",
    },
  ],
  [
    44612,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB104_EP15",
    },
  ],
  [
    44613,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB104_EP15",
    },
  ],
  [
    44614,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB104_EP14",
    },
  ],
  [
    44615,
    {
      key: "HIGH_PRESSURE_SENSOR_EB104_EP14",
    },
  ],
  [
    44616,
    {
      key: "LOW_PRESSURE_SENSOR_EB104_EP14",
    },
  ],
  [
    44617,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    44618,
    {
      key: "CPR_PROTECTION_MODE_EB104_EP14",
    },
  ],
  [
    44619,
    {
      key: "DEFROSTING_EB104_EP14",
    },
  ],
  [
    44620,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    44621,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    44622,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    44623,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    44624,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB104_EP14",
    },
  ],
  [
    44625,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB104_EP14",
    },
  ],
  [
    44626,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB104_EP14",
    },
  ],
  [
    44627,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB104_EP14",
    },
  ],
  [
    44628,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB103_EP15",
    },
  ],
  [
    44629,
    {
      key: "HIGH_PRESSURE_SENSOR_EB103_EP15",
    },
  ],
  [
    44630,
    {
      key: "LOW_PRESSURE_SENSOR_EB103_EP15",
    },
  ],
  [
    44631,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    44632,
    {
      key: "CPR_PROTECTION_MODE_EB103_EP15",
    },
  ],
  [
    44633,
    {
      key: "DEFROSTING_EB103_EP15",
    },
  ],
  [
    44634,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    44635,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    44636,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    44637,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    44638,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB103_EP15",
    },
  ],
  [
    44639,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB103_EP15",
    },
  ],
  [
    44640,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB103_EP15",
    },
  ],
  [
    44641,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB103_EP15",
    },
  ],
  [
    44642,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB103_EP14",
    },
  ],
  [
    44643,
    {
      key: "HIGH_PRESSURE_SENSOR_EB103_EP14",
    },
  ],
  [
    44644,
    {
      key: "LOW_PRESSURE_SENSOR_EB103_EP14",
    },
  ],
  [
    44645,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    44646,
    {
      key: "CPR_PROTECTION_MODE_EB103_EP14",
    },
  ],
  [
    44647,
    {
      key: "DEFROSTING_EB103_EP14",
    },
  ],
  [
    44648,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    44649,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    44650,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    44651,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    44652,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB103_EP14",
    },
  ],
  [
    44653,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB103_EP14",
    },
  ],
  [
    44654,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB103_EP14",
    },
  ],
  [
    44655,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB103_EP14",
    },
  ],
  [
    44656,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB102_EP15",
    },
  ],
  [
    44657,
    {
      key: "HIGH_PRESSURE_SENSOR_EB102_EP15",
    },
  ],
  [
    44658,
    {
      key: "LOW_PRESSURE_SENSOR_EB102_EP15",
    },
  ],
  [
    44659,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    44660,
    {
      key: "CPR_PROTECTION_MODE_EB102_EP15",
    },
  ],
  [
    44661,
    {
      key: "DEFROSTING_EB102_EP15",
    },
  ],
  [
    44662,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    44663,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    44664,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    44665,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    44666,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB102_EP15",
    },
  ],
  [
    44667,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB102_EP15",
    },
  ],
  [
    44668,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB102_EP15",
    },
  ],
  [
    44669,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB102_EP15",
    },
  ],
  [
    44670,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB102_EP14",
    },
  ],
  [
    44671,
    {
      key: "HIGH_PRESSURE_SENSOR_EB102_EP14",
    },
  ],
  [
    44672,
    {
      key: "LOW_PRESSURE_SENSOR_EB102_EP14",
    },
  ],
  [
    44673,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    44674,
    {
      key: "CPR_PROTECTION_MODE_EB102_EP14",
    },
  ],
  [
    44675,
    {
      key: "DEFROSTING_EB102_EP14",
    },
  ],
  [
    44676,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    44677,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    44678,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    44679,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    44680,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB102_EP14",
    },
  ],
  [
    44681,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB102_EP14",
    },
  ],
  [
    44682,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB102_EP14",
    },
  ],
  [
    44683,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB102_EP14",
    },
  ],
  [
    44684,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB101_EP15",
    },
  ],
  [
    44685,
    {
      key: "HIGH_PRESSURE_SENSOR_EB101_EP15",
    },
  ],
  [
    44686,
    {
      key: "LOW_PRESSURE_SENSOR_EB101_EP15",
    },
  ],
  [
    44687,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    44688,
    {
      key: "CPR_PROTECTION_MODE_EB101_EP15",
    },
  ],
  [
    44689,
    {
      key: "DEFROSTING_EB101_EP15",
    },
  ],
  [
    44690,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    44691,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    44692,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    44693,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    44694,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB101_EP15",
    },
  ],
  [
    44695,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB101_EP15",
    },
  ],
  [
    44696,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB101_EP15",
    },
  ],
  [
    44697,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB101_EP15",
    },
  ],
  [
    44698,
    {
      key: "HIGH_PRESSURE_SENSOR_RAW_VALUE_EB101_EP14",
    },
  ],
  [
    44699,
    {
      key: "HIGH_PRESSURE_SENSOR_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    44700,
    {
      key: "LOW_PRESSURE_SENSOR_EB101_EP14",
    },
  ],
  [
    44701,
    {
      key: "CURRENT_COMPR_FREQUENCY_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    44702,
    {
      key: "CPR_PROTECTION_MODE_EB101_EP14",
    },
  ],
  [
    44703,
    {
      key: "DEFROSTING_EB101_EP14",
    },
  ],
  [
    44704,
    {
      key: "MAX_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    44705,
    {
      key: "MAX_CALCULATED_RETURN_TEMPERATURE_OUTDOOR_UNIT_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    44706,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    44707,
    {
      key: "MIN_CALCULATED_SUPPLY_TEMPERATURE_OUTDOOR_UNIT_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    44708,
    {
      key: "ALARM_HIGH_SUPPLY_TEMPERATURE_EB101_EP14",
    },
  ],
  [
    44709,
    {
      key: "ALARM_HIGH_RETURN_TEMPERATURE_EB101_EP14",
    },
  ],
  [
    44710,
    {
      key: "ALARM_LOW_OUTDOOR_TEMPERATURE_EB101_EP14",
    },
  ],
  [
    44711,
    {
      key: "ALARM_HIGH_OUTDOOR_TEMPERATURE_EB101_EP14",
    },
  ],
  [
    44713,
    {
      key: "HIGH_PRESSURE_SENSOR",
    },
  ],
  [
    44714,
    {
      key: "LOW_PRESSURE_SENSOR",
    },
  ],
  [
    44715,
    {
      key: "CURRENT_COMPR_FREQUENCY",
      divideBy: 10,
    },
  ],
  [
    44716,
    {
      key: "CPR_PROTECTION_MODE",
    },
  ],
  [
    44717,
    {
      key: "DEFROSTING",
    },
  ],
  [
    44727,
    {
      key: "HIGH_PRESSURE_SENSOR",
    },
  ],
  [
    44728,
    {
      key: "LOW_PRESSURE_SENSOR",
    },
  ],
  [
    44729,
    {
      key: "CURRENT_COMPR_FREQUENCY",
      divideBy: 10,
    },
  ],
  [
    44730,
    {
      key: "CPR_PROTECTION_MODE",
    },
  ],
  [
    44731,
    {
      key: "DEFROSTING",
    },
  ],
  [
    44742,
    {
      key: "HW_VALVE_QN35",
    },
  ],
  [
    44743,
    {
      key: "INTERNAL_CHARGE_PUMP",
    },
  ],
  [
    44744,
    {
      key: "EXTRA_HEATING_SYSTEM_PUMP_S4",
    },
  ],
  [
    44745,
    {
      key: "EXTRA_HEATING_SYSTEM_PUMP_S3",
    },
  ],
  [
    44746,
    {
      key: "EXTRA_HEATING_SYSTEM_PUMP_S2",
    },
  ],
  [
    44748,
    {
      key: "POOL_2_PUMP_STATUS",
    },
  ],
  [
    44749,
    {
      key: "POOL_1_PUMP_STATUS",
    },
  ],
  [
    44750,
    {
      key: "FJVM_PUMP",
    },
  ],
  [
    44751,
    {
      key: "ACS_VALVE_EQ1_QN12",
    },
  ],
  [
    44752,
    {
      key: "ACS_DUMP_SIGNAL_EQ1_GP20",
    },
  ],
  [
    44753,
    {
      key: "PASSIVE_COOL_SHUNT",
    },
  ],
  [
    44754,
    {
      key: "PASSIVE_COOL_POOL_GP13",
    },
  ],
  [
    44755,
    {
      key: "DEW_HOT_WATER_VALVE",
    },
  ],
  [
    44756,
    {
      key: "STATE_GROUND_WATER_PUMP",
    },
  ],
  [
    44757,
    {
      key: "SCA_HOT_WATER_VALVE",
    },
  ],
  [
    44760,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB108_EP15",
    },
  ],
  [
    44761,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB108_EP14",
    },
  ],
  [
    44762,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB107_EP15",
    },
  ],
  [
    44763,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB107_EP14",
    },
  ],
  [
    44764,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB106_EP15",
    },
  ],
  [
    44765,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB106_EP14",
    },
  ],
  [
    44766,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB105_EP15",
    },
  ],
  [
    44767,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB105_EP14",
    },
  ],
  [
    44768,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB104_EP15",
    },
  ],
  [
    44769,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB104_EP14",
    },
  ],
  [
    44770,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB103_EP15",
    },
  ],
  [
    44771,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB103_EP14",
    },
  ],
  [
    44772,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB102_EP15",
    },
  ],
  [
    44773,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB102_EP14",
    },
  ],
  [
    44774,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB101_EP15",
    },
  ],
  [
    44775,
    {
      key: "REQUESTED_COMPRESSOR_FREQ_EB101_EP14",
    },
  ],
  [
    44776,
    {
      key: "REQUESTED_COMPRESSOR_FREQ",
    },
  ],
  [
    44777,
    {
      key: "REQUESTED_COMPRESSOR_FREQ",
    },
  ],
  [
    44778,
    {
      key: "STATE_BRINE_SHUNT_EP10_QN41",
    },
  ],
  [
    44779,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    44820,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB108_EP15",
    },
  ],
  [
    44821,
    {
      key: "CURRENT_SENSOR_EB108_EP15",
    },
  ],
  [
    44822,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB108_EP15",
    },
  ],
  [
    44823,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB108_EP14",
    },
  ],
  [
    44824,
    {
      key: "CURRENT_EB108_EP14",
    },
  ],
  [
    44825,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB108_EP14",
    },
  ],
  [
    44826,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB107_EP15",
    },
  ],
  [
    44827,
    {
      key: "CURRENT_SENSOR_EB107_EP15",
    },
  ],
  [
    44828,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB107_EP15",
    },
  ],
  [
    44829,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB107_EP14",
    },
  ],
  [
    44830,
    {
      key: "CURRENT_EB107_EP14",
    },
  ],
  [
    44831,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB107_EP14",
    },
  ],
  [
    44832,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB106_EP15",
    },
  ],
  [
    44833,
    {
      key: "CURRENT_SENSOR_EB106_EP15",
    },
  ],
  [
    44834,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB106_EP15",
    },
  ],
  [
    44835,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB106_EP14",
    },
  ],
  [
    44836,
    {
      key: "CURRENT_EB106_EP14",
    },
  ],
  [
    44837,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB106_EP14",
    },
  ],
  [
    44838,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB105_EP15",
    },
  ],
  [
    44839,
    {
      key: "CURRENT_SENSOR_EB105_EP15",
    },
  ],
  [
    44840,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB105_EP15",
    },
  ],
  [
    44841,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB105_EP14",
    },
  ],
  [
    44842,
    {
      key: "CURRENT_EB105_EP14",
    },
  ],
  [
    44843,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB105_EP14",
    },
  ],
  [
    44844,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB104_EP15",
    },
  ],
  [
    44845,
    {
      key: "CURRENT_SENSOR_EB104_EP15",
    },
  ],
  [
    44846,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB104_EP15",
    },
  ],
  [
    44847,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB104_EP14",
    },
  ],
  [
    44848,
    {
      key: "CURRENT_EB104_EP14",
    },
  ],
  [
    44849,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB104_EP14",
    },
  ],
  [
    44850,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB103_EP15",
    },
  ],
  [
    44851,
    {
      key: "CURRENT_SENSOR_EB103_EP15",
    },
  ],
  [
    44852,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB103_EP15",
    },
  ],
  [
    44853,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB103_EP14",
    },
  ],
  [
    44854,
    {
      key: "CURRENT_EB103_EP14",
    },
  ],
  [
    44855,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB103_EP14",
    },
  ],
  [
    44856,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB102_EP15",
    },
  ],
  [
    44857,
    {
      key: "CURRENT_SENSOR_EB102_EP15",
    },
  ],
  [
    44858,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB102_EP15",
    },
  ],
  [
    44859,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB102_EP14",
    },
  ],
  [
    44860,
    {
      key: "CURRENT_EB102_EP14",
    },
  ],
  [
    44861,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB102_EP14",
    },
  ],
  [
    44862,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB101_EP15",
    },
  ],
  [
    44863,
    {
      key: "CURRENT_SENSOR_EB101_EP15",
    },
  ],
  [
    44864,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB101_EP15",
    },
  ],
  [
    44865,
    {
      key: "LOW_PRESSURE_SENSOR_RAW_VALUE_EB101_EP14",
    },
  ],
  [
    44866,
    {
      key: "CURRENT_EB101_EP14",
    },
  ],
  [
    44867,
    {
      key: "HZ_DOWN_MODE_OUTDOOR_UNIT_EB101_EP14",
    },
  ],
  [
    44874,
    {
      key: "STATE_SG_READY",
    },
  ],
  [
    44878,
    {
      key: "SG_READY_INPUT_A",
    },
  ],
  [
    44879,
    {
      key: "SG_READY_INPUT_B",
    },
  ],
  [
    44896,
    {
      key: "HEATING",
    },
  ],
  [
    44897,
    {
      key: "HOT_WATER",
    },
  ],
  [
    44898,
    {
      key: "POOL",
    },
  ],
  [
    44899,
    {
      key: "COOLING",
    },
  ],
  [
    44908,
    {
      key: "STATUS",
    },
  ],
  [
    44909,
    {
      key: "TEST_VARIABLE_EXERCISE_FUNCTION",
    },
  ],
  [
    44910,
    {
      key: "BRINE_PUMP_DT_ACTUAL",
    },
  ],
  [
    44911,
    {
      key: "BRINE_PUMP_DT_SET_POINT",
    },
  ],
  [
    44912,
    {
      key: "BRINE_PUMP_AUTO_CONTROLLED",
    },
  ],
  [
    44932,
    {
      key: "EVAPORATOR_2_EB108_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44933,
    {
      key: "INVERTER_TEMPERATURE_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    44934,
    {
      key: "EB108_EP15_FAN_SPEED_STEP",
    },
  ],
  [
    44935,
    {
      key: "EVAPORATOR_2_EB108_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44936,
    {
      key: "INVERTER_TEMPERATURE_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    44937,
    {
      key: "EB108_EP14_FAN_SPEED_STEP",
    },
  ],
  [
    44938,
    {
      key: "EVAPORATOR_2_EB107_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44939,
    {
      key: "INVERTER_TEMPERATURE_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    44940,
    {
      key: "EB107_EP15_FAN_SPEED_STEP",
    },
  ],
  [
    44941,
    {
      key: "EVAPORATOR_2_EB107_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44942,
    {
      key: "INVERTER_TEMPERATURE_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    44943,
    {
      key: "EB107_EP14_FAN_SPEED_STEP",
    },
  ],
  [
    44944,
    {
      key: "EVAPORATOR_2_EB106_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44945,
    {
      key: "INVERTER_TEMPERATURE_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    44946,
    {
      key: "EB106_EP15_FAN_SPEED_STEP",
    },
  ],
  [
    44947,
    {
      key: "EVAPORATOR_2_EB106_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44948,
    {
      key: "INVERTER_TEMPERATURE_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    44949,
    {
      key: "EB106_EP14_FAN_SPEED_STEP",
    },
  ],
  [
    44950,
    {
      key: "EVAPORATOR_2_EB105_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44951,
    {
      key: "INVERTER_TEMPERATURE_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    44952,
    {
      key: "EB105_EP15_FAN_SPEED_STEP",
    },
  ],
  [
    44953,
    {
      key: "EVAPORATOR_2_EB105_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44954,
    {
      key: "INVERTER_TEMPERATURE_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    44955,
    {
      key: "EB105_EP14_FAN_SPEED_STEP",
    },
  ],
  [
    44956,
    {
      key: "EVAPORATOR_2_EB104_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44957,
    {
      key: "INVERTER_TEMPERATURE_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    44958,
    {
      key: "EB104_EP15_FAN_SPEED_STEP",
    },
  ],
  [
    44959,
    {
      key: "EVAPORATOR_2_EB104_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44960,
    {
      key: "INVERTER_TEMPERATURE_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    44961,
    {
      key: "EB104_EP14_FAN_SPEED_STEP",
    },
  ],
  [
    44962,
    {
      key: "EVAPORATOR_2_EB103_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44963,
    {
      key: "INVERTER_TEMPERATURE_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    44964,
    {
      key: "EB103_EP15_FAN_SPEED_STEP",
    },
  ],
  [
    44965,
    {
      key: "EVAPORATOR_2_EB103_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44966,
    {
      key: "INVERTER_TEMPERATURE_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    44967,
    {
      key: "EB103_EP14_FAN_SPEED_STEP",
    },
  ],
  [
    44968,
    {
      key: "EVAPORATOR_2_EB102_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44969,
    {
      key: "INVERTER_TEMPERATURE_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    44970,
    {
      key: "EB102_EP15_FAN_SPEED_STEP",
    },
  ],
  [
    44971,
    {
      key: "EVAPORATOR_2_EB102_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44972,
    {
      key: "INVERTER_TEMPERATURE_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    44973,
    {
      key: "EB102_EP14_FAN_SPEED_STEP",
    },
  ],
  [
    44974,
    {
      key: "EVAPORATOR_2_EB101_EP15_BT16",
      divideBy: 10,
    },
  ],
  [
    44975,
    {
      key: "INVERTER_TEMPERATURE_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    44976,
    {
      key: "EB101_EP15_FAN_SPEED_STEP",
    },
  ],
  [
    44977,
    {
      key: "EVAPORATOR_2_EB101_EP14_BT16",
      divideBy: 10,
    },
  ],
  [
    44978,
    {
      key: "INVERTER_TEMPERATURE_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    44979,
    {
      key: "EB101_EP14_FAN_SPEED_STEP",
    },
  ],
  [
    45001,
    {
      key: "ALARM",
    },
  ],
  [
    45002,
    {
      key: "HP_ALARM",
    },
  ],
  [
    45003,
    {
      key: "LP_ALARM",
    },
  ],
  [
    45005,
    {
      key: "SENSOR_ERROR_BT1",
    },
  ],
  [
    45006,
    {
      key: "SENSOR_ERROR_BT2",
    },
  ],
  [
    45007,
    {
      key: "SENSOR_ERROR_BT11",
    },
  ],
  [
    45008,
    {
      key: "SENSOR_ERROR_BT10",
    },
  ],
  [
    45009,
    {
      key: "SENSOR_ERROR_BT12",
    },
  ],
  [
    45010,
    {
      key: "SENSOR_ERROR_BT3",
    },
  ],
  [
    45011,
    {
      key: "SENSOR_ERROR_BT6",
    },
  ],
  [
    45012,
    {
      key: "SENSOR_ERROR_BT14",
    },
  ],
  [
    45013,
    {
      key: "SENSOR_ERROR_BT18",
    },
  ],
  [
    45014,
    {
      key: "SENSOR_ERROR_BT19",
    },
  ],
  [
    45015,
    {
      key: "SENSOR_ERROR_BT16",
    },
  ],
  [
    45016,
    {
      key: "SENSOR_ERROR_BT20",
    },
  ],
  [
    45017,
    {
      key: "SENSOR_ERROR_BT26",
    },
  ],
  [
    45018,
    {
      key: "SENSOR_ERROR_BT21",
    },
  ],
  [
    45025,
    {
      key: "ALARM_THERMAL_CUT_OUT",
    },
  ],
  [
    45026,
    {
      key: "ALARM_HIGH_HOT_GAS_TEMP",
    },
  ],
  [
    45027,
    {
      key: "COM_FAILURE_PCA_INPUT",
    },
  ],
  [
    45028,
    {
      key: "COM_FAILURE_PCA_BASE",
    },
  ],
  [
    45029,
    {
      key: "COM_FAILURE_PCA_MC",
    },
  ],
  [
    45030,
    {
      key: "COM_FAILURE_INVERTER",
    },
  ],
  [
    45032,
    {
      key: "COM_FAILURE_SYSTEM_2",
    },
  ],
  [
    45033,
    {
      key: "COM_FAILURE_SYSTEM_3",
    },
  ],
  [
    45034,
    {
      key: "COM_FAILURE_SYSTEM_4",
    },
  ],
  [
    45035,
    {
      key: "COM_FAILURE_ADD_W_SHUNT",
    },
  ],
  [
    45036,
    {
      key: "COM_FAILURE_POOL",
    },
  ],
  [
    45037,
    {
      key: "COM_FAILURE_FLM",
    },
  ],
  [
    45038,
    {
      key: "COM_FAILURE_GWP",
    },
  ],
  [
    45039,
    {
      key: "COM_FAILURE_HWC",
    },
  ],
  [
    45040,
    {
      key: "COM_FAILURE_PCM4042",
    },
  ],
  [
    45041,
    {
      key: "COM_FAILURE_PCD2",
    },
  ],
  [
    45042,
    {
      key: "COM_FAILURE_PCS44",
    },
  ],
  [
    45043,
    {
      key: "COM_FAILURE_FJVM",
    },
  ],
  [
    45044,
    {
      key: "HIGH_BRINE_OUT_ALARM",
    },
  ],
  [
    45045,
    {
      key: "LOW_BRINE_LEVEL_ALARM",
    },
  ],
  [
    45047,
    {
      key: "SENSOR_ERROR_FLM_COLL_IN",
    },
  ],
  [
    45048,
    {
      key: "SENSOR_ERROR_FLM_VENT_AIR",
    },
  ],
  [
    45049,
    {
      key: "SENSOR_ERROR_FLM_EXHAUST_AIR",
    },
  ],
  [
    45050,
    {
      key: "SENSOR_ERROR_BT64",
    },
  ],
  [
    45052,
    {
      key: "SENSOR_ERROR_EP21_BT2",
    },
  ],
  [
    45053,
    {
      key: "SENSOR_ERROR_EP22_BT2",
    },
  ],
  [
    45054,
    {
      key: "SENSOR_ERROR_EP23_BT2",
    },
  ],
  [
    45056,
    {
      key: "SENSOR_ERROR_BS1",
    },
  ],
  [
    45057,
    {
      key: "INVERTER_FAULT",
    },
  ],
  [
    45058,
    {
      key: "INVERTER_ALARM",
    },
  ],
  [
    45059,
    {
      key: "LOW_COND_OUT_ALARM",
    },
  ],
  [
    45060,
    {
      key: "HIGH_COND_IN_ALARM",
    },
  ],
  [
    45075,
    {
      key: "TMP_COM_ERROR_PCA_INPUT",
    },
  ],
  [
    45076,
    {
      key: "TMP_COM_ERROR_PCA_BASE",
    },
  ],
  [
    45077,
    {
      key: "TMP_COM_ERROR_INVERTER",
    },
  ],
  [
    45078,
    {
      key: "TMP_COM_ERROR_PCA_MC",
    },
  ],
  [
    45079,
    {
      key: "TMP_COM_ERROR_RCU",
    },
  ],
  [
    45080,
    {
      key: "TMP_COM_ERROR_SYSTEM_2",
    },
  ],
  [
    45081,
    {
      key: "TMP_COM_ERROR_SYSTEM_3",
    },
  ],
  [
    45082,
    {
      key: "TMP_COM_ERROR_SYSTEM_4",
    },
  ],
  [
    45083,
    {
      key: "TMP_COM_ERROR_ADD_W_SHUNT",
    },
  ],
  [
    45084,
    {
      key: "TMP_COM_ERROR_POOL",
    },
  ],
  [
    45085,
    {
      key: "TMP_COM_ERROR_FLM",
    },
  ],
  [
    45086,
    {
      key: "TMP_COM_ERROR_GW_PUMP",
    },
  ],
  [
    45087,
    {
      key: "TMP_COM_ERROR_HWC",
    },
  ],
  [
    45088,
    {
      key: "TMP_COM_ERROR_PCM4042",
    },
  ],
  [
    45089,
    {
      key: "TMP_COM_ERROR_PCD2",
    },
  ],
  [
    45090,
    {
      key: "TMP_COM_ERROR_PCS44",
    },
  ],
  [
    45091,
    {
      key: "TMP_COM_ERROR_FJVM",
    },
  ],
  [
    45100,
    {
      key: "SENSOR_ERROR_BT7",
    },
  ],
  [
    45101,
    {
      key: "SENSOR_ERROR_BT51",
    },
  ],
  [
    45120,
    {
      key: "COM_FAILURE_HPAC",
    },
  ],
  [
    45121,
    {
      key: "COM_FAILURE_SOLAR",
    },
  ],
  [
    45124,
    {
      key: "TMP_COM_ERROR_HPAC",
    },
  ],
  [
    45125,
    {
      key: "TMP_COM_ERROR_SOLAR",
    },
  ],
  [
    45126,
    {
      key: "INVERTER_ALARM_III",
    },
  ],
  [
    45127,
    {
      key: "INVERTER_ALARM_II",
    },
  ],
  [
    45128,
    {
      key: "INVERTER_ALARM_I",
    },
  ],
  [
    45129,
    {
      key: "TMP_INVERTER_ALARM_III",
    },
  ],
  [
    45130,
    {
      key: "TMP_INVERTER_ALARM_II",
    },
  ],
  [
    45131,
    {
      key: "TMP_INVERTER_ALARM_I",
    },
  ],
  [
    45151,
    {
      key: "COM_FAILURE_DEW",
    },
  ],
  [
    45152,
    {
      key: "COM_FAILURE_DEH",
    },
  ],
  [
    45155,
    {
      key: "TMP_COM_ERROR_DEW",
    },
  ],
  [
    45156,
    {
      key: "TMP_COM_ERROR_DEH",
    },
  ],
  [
    45171,
    {
      key: "ALARM_RESET",
    },
  ],
  [
    45172,
    {
      key: "SENSOR_ERROR_DEW_BT6",
    },
  ],
  [
    45173,
    {
      key: "LOW_SUPPLY_AIR_TEMP",
    },
  ],
  [
    45179,
    {
      key: "MP_ALARM",
    },
  ],
  [
    45180,
    {
      key: "INCORRECT_PHASE_ORDER_ALARM",
    },
  ],
  [
    45181,
    {
      key: "PHASE_1_MISSING",
    },
  ],
  [
    45182,
    {
      key: "PHASE_2_MISSING",
    },
  ],
  [
    45183,
    {
      key: "PHASE_3_MISSING",
    },
  ],
  [
    45184,
    {
      key: "GENERAL_PHASE_ORDER_ERROR",
    },
  ],
  [
    45190,
    {
      key: "INFO_RESTART_CPR",
    },
  ],
  [
    45195,
    {
      key: "HP_ALARM",
    },
  ],
  [
    45196,
    {
      key: "HP_ALARM",
    },
  ],
  [
    45197,
    {
      key: "LP_ALARM",
    },
  ],
  [
    45198,
    {
      key: "LP_ALARM",
    },
  ],
  [
    45199,
    {
      key: "MP_ALARM",
    },
  ],
  [
    45200,
    {
      key: "MP_ALARM",
    },
  ],
  [
    45201,
    {
      key: "SENSOR_ERROR_EP15_BT11",
    },
  ],
  [
    45202,
    {
      key: "SENSOR_ERROR_EP14_BT11",
    },
  ],
  [
    45203,
    {
      key: "SENSOR_ERROR_EP15_BT10",
    },
  ],
  [
    45204,
    {
      key: "SENSOR_ERROR_EP14_BT10",
    },
  ],
  [
    45205,
    {
      key: "SENSOR_ERROR_EP15_BT12",
    },
  ],
  [
    45206,
    {
      key: "SENSOR_ERROR_EP14_BT12",
    },
  ],
  [
    45207,
    {
      key: "SENSOR_ERROR_EP15_BT3",
    },
  ],
  [
    45208,
    {
      key: "SENSOR_ERROR_EP14_BT3",
    },
  ],
  [
    45209,
    {
      key: "SENSOR_ERROR_EP15_BT14",
    },
  ],
  [
    45210,
    {
      key: "SENSOR_ERROR_EP14_BT14",
    },
  ],
  [
    45211,
    {
      key: "SENSOR_ERROR_DEH_BT52",
    },
  ],
  [
    45212,
    {
      key: "SENSOR_ERROR_EP15_BP8",
    },
  ],
  [
    45213,
    {
      key: "SENSOR_ERROR_EP14_BP8",
    },
  ],
  [
    45214,
    {
      key: "INCORRECT_PHASE_ORDER_ALARM_EP14",
    },
  ],
  [
    45215,
    {
      key: "INCORRECT_PHASE_ORDER_ALARM_EP14",
    },
  ],
  [
    45216,
    {
      key: "PHASE_1_MISSING_EP15",
    },
  ],
  [
    45217,
    {
      key: "PHASE_1_MISSING_EP14",
    },
  ],
  [
    45218,
    {
      key: "PHASE_2_MISSING_EP15",
    },
  ],
  [
    45219,
    {
      key: "PHASE_2_MISSING_EP14",
    },
  ],
  [
    45220,
    {
      key: "PHASE_3_MISSING_EP15",
    },
  ],
  [
    45221,
    {
      key: "PHASE_3_MISSING_EP14",
    },
  ],
  [
    45222,
    {
      key: "GENERAL_PHASE_ORDER_ERROR_EP15",
    },
  ],
  [
    45223,
    {
      key: "GENERAL_PHASE_ORDER_ERROR_EP14",
    },
  ],
  [
    45224,
    {
      key: "ALARM_OVER_HEATED_SOFT_START_EP15",
    },
  ],
  [
    45225,
    {
      key: "ALARM_OVER_HEATED_SOFT_START_EP14",
    },
  ],
  [
    45226,
    {
      key: "ALARM_HIGH_HOT_GAS_TEMP_EP15",
    },
  ],
  [
    45227,
    {
      key: "ALARM_HIGH_HOT_GAS_TEMP_EP14",
    },
  ],
  [
    45228,
    {
      key: "COM_FAILURE_FLM",
    },
  ],
  [
    45229,
    {
      key: "COM_FAILURE_FLM",
    },
  ],
  [
    45230,
    {
      key: "COM_FAILURE_FLM",
    },
  ],
  [
    45231,
    {
      key: "COM_FAILURE_FLM",
    },
  ],
  [
    45232,
    {
      key: "HIGH_BRINE_OUT_ALARM",
    },
  ],
  [
    45233,
    {
      key: "HIGH_BRINE_OUT_ALARM",
    },
  ],
  [
    45236,
    {
      key: "SENSOR_ERROR_FLM_COLL_IN",
    },
  ],
  [
    45237,
    {
      key: "SENSOR_ERROR_FLM_COLL_IN",
    },
  ],
  [
    45238,
    {
      key: "SENSOR_ERROR_FLM_COLL_IN",
    },
  ],
  [
    45239,
    {
      key: "SENSOR_ERROR_FLM_COLL_IN",
    },
  ],
  [
    45240,
    {
      key: "SENSOR_ERROR_FLM_VENT_AIR",
    },
  ],
  [
    45241,
    {
      key: "SENSOR_ERROR_FLM_VENT_AIR",
    },
  ],
  [
    45242,
    {
      key: "SENSOR_ERROR_FLM_VENT_AIR",
    },
  ],
  [
    45243,
    {
      key: "SENSOR_ERROR_FLM_VENT_AIR",
    },
  ],
  [
    45244,
    {
      key: "SENSOR_ERROR_FLM_EXHAUST_AIR",
    },
  ],
  [
    45245,
    {
      key: "SENSOR_ERROR_FLM_EXHAUST_AIR",
    },
  ],
  [
    45246,
    {
      key: "SENSOR_ERROR_FLM_EXHAUST_AIR",
    },
  ],
  [
    45247,
    {
      key: "SENSOR_ERROR_FLM_EXHAUST_AIR",
    },
  ],
  [
    45256,
    {
      key: "TMP_COM_ERROR_FLM",
    },
  ],
  [
    45257,
    {
      key: "TMP_COM_ERROR_FLM",
    },
  ],
  [
    45258,
    {
      key: "TMP_COM_ERROR_FLM",
    },
  ],
  [
    45259,
    {
      key: "TMP_COM_ERROR_FLM",
    },
  ],
  [
    45276,
    {
      key: "INFO_RESTART_CPR",
    },
  ],
  [
    45277,
    {
      key: "INFO_RESTART_CPR",
    },
  ],
  [
    45283,
    {
      key: "COM_FAILURE_EXT_ADD",
    },
  ],
  [
    45285,
    {
      key: "TMP_COM_FAILURE_EXT_ADD",
    },
  ],
  [
    45290,
    {
      key: "SENSOR_ERROR_EP14_BT29",
    },
  ],
  [
    45291,
    {
      key: "SENSOR_ERROR_EP14_BT29",
    },
  ],
  [
    45292,
    {
      key: "HIGH_COND_OUT_ALARM_EP15",
    },
  ],
  [
    45293,
    {
      key: "HIGH_COND_OUT_ALARM_EP14",
    },
  ],
  [
    45294,
    {
      key: "HIGH_COND_IN_ALARM_EP15",
    },
  ],
  [
    45295,
    {
      key: "HIGH_COND_IN_ALARM_EP14",
    },
  ],
  [
    45307,
    {
      key: "BR_PUMP_MP_ALARM",
    },
  ],
  [
    45308,
    {
      key: "SENSOR_ERROR_BT71",
    },
  ],
  [
    45314,
    {
      key: "SENSOR_ERROR_BT53",
    },
  ],
  [
    45315,
    {
      key: "SENSOR_ERROR_BT54",
    },
  ],
  [
    45316,
    {
      key: "ALARM_HIGH_HOT_GAS_TEMP_EP15",
    },
  ],
  [
    45317,
    {
      key: "ALARM_HIGH_HOT_GAS_TEMP_EP14",
    },
  ],
  [
    45318,
    {
      key: "COM_FAILURE_EXT_COOLING",
    },
  ],
  [
    45320,
    {
      key: "TMP_COM_FAILURE_EXT_COOLING",
    },
  ],
  [
    45334,
    {
      key: "NON_MODULE_SPECIFIC_ALARM",
    },
  ],
  [
    45335,
    {
      key: "SENSOR_ERROR_BT63",
    },
  ],
  [
    45336,
    {
      key: "COM_FAILURE_PCA_MC",
    },
  ],
  [
    45337,
    {
      key: "COM_FAILURE_PCA_MC",
    },
  ],
  [
    45340,
    {
      key: "TMP_COM_ERROR_PCA_MC",
    },
  ],
  [
    45341,
    {
      key: "TMP_COM_ERROR_PCA_MC",
    },
  ],
  [
    45342,
    {
      key: "SENSOR_ERROR_SCA_BT6",
    },
  ],
  [
    45343,
    {
      key: "SENSOR_ERROR_BT55",
    },
  ],
  [
    45344,
    {
      key: "COM_FAILURE_ACS",
    },
  ],
  [
    45345,
    {
      key: "TMP_COM_ERROR_ACS",
    },
  ],
  [
    45390,
    {
      key: "INCOMPATIBLE_HEATPUMP_ALARM",
    },
  ],
  [
    45432,
    {
      key: "ESTIMATED_POWER_CONSUMPTION_VARIATION",
    },
  ],
  [
    45434,
    {
      key: "ESTIMATED_POWER_CONSUMPTION_AT_DUT_USED",
    },
  ],
  [
    45436,
    {
      key: "ESTIMATED_POWER_AT_DUT_SOURCE",
    },
  ],
  [
    45438,
    {
      key: "CONFIRMED_SAMPLES_EST_POWER_CONSUMPTION",
    },
  ],
  [
    45451,
    {
      key: "_EB108",
    },
  ],
  [
    45452,
    {
      key: "_EB107",
    },
  ],
  [
    45453,
    {
      key: "_EB106",
    },
  ],
  [
    45454,
    {
      key: "_EB105",
    },
  ],
  [
    45455,
    {
      key: "_EB104",
    },
  ],
  [
    45456,
    {
      key: "_EB103",
    },
  ],
  [
    45457,
    {
      key: "_EB102",
    },
  ],
  [
    45458,
    {
      key: "_EB101",
    },
  ],
  [
    45460,
    {
      key: "COUNTER_TO_CONTROL_CPR_HEATER_12KW_CPR",
    },
  ],
  [
    45461,
    {
      key: "COUNTER_TO_CONTROL_ALARM_CPR_HEATER_12KW_CPR",
    },
  ],
  [
    45555,
    {
      key: "ANALOG_OUTPUT_FOR_SHUNT_CONTROLLED_ADD_HEAT",
    },
  ],
  [
    45567,
    {
      key: "DHW30_CHARGE_PUMP_SPEED",
    },
  ],
  [
    45568,
    {
      key: "DHW30_CHARGE_PUMP_SPEED",
    },
  ],
  [
    45569,
    {
      key: "DHW30_CHARGE_PUMP_SPEED",
    },
  ],
  [
    45570,
    {
      key: "DHW30_CHARGE_PUMP_SPEED",
    },
  ],
  [
    45571,
    {
      key: "DHW30_CHARGE_PUMP_SPEED",
    },
  ],
  [
    45572,
    {
      key: "DHW30_CHARGE_PUMP_SPEED",
    },
  ],
  [
    45573,
    {
      key: "DHW30_CHARGE_PUMP_SPEED",
    },
  ],
  [
    45574,
    {
      key: "DHW30_CHARGE_PUMP_SPEED",
    },
  ],
  [
    45575,
    {
      key: "DHW30_BLOCKED",
    },
  ],
  [
    45576,
    {
      key: "DHW30_BLOCKED",
    },
  ],
  [
    45577,
    {
      key: "DHW30_BLOCKED",
    },
  ],
  [
    45578,
    {
      key: "DHW30_BLOCKED",
    },
  ],
  [
    45579,
    {
      key: "DHW30_BLOCKED",
    },
  ],
  [
    45580,
    {
      key: "DHW30_BLOCKED",
    },
  ],
  [
    45581,
    {
      key: "DHW30_BLOCKED",
    },
  ],
  [
    45582,
    {
      key: "DHW30_BLOCKED",
    },
  ],
  [
    45583,
    {
      key: "MULTI_SYSTEM_TSS20",
    },
  ],
  [
    45584,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_RH_CALC_POINT",
    },
  ],
  [
    45585,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_RH_CALC_POINT",
    },
  ],
  [
    45586,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_RH_CALC_POINT",
    },
  ],
  [
    45587,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_RH_CALC_POINT",
    },
  ],
  [
    45588,
    {
      key: "HOT_GAS_EB108_EP15_BT89",
      divideBy: 10,
    },
  ],
  [
    45589,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB108_EP15",
      divideBy: 10,
    },
  ],
  [
    45590,
    {
      key: "HOT_GAS_EB108_EP14_BT89",
      divideBy: 10,
    },
  ],
  [
    45591,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB108_EP14",
      divideBy: 10,
    },
  ],
  [
    45592,
    {
      key: "HOT_GAS_EB107_EP15_BT89",
      divideBy: 10,
    },
  ],
  [
    45593,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB107_EP15",
      divideBy: 10,
    },
  ],
  [
    45594,
    {
      key: "HOT_GAS_EB107_EP14_BT89",
      divideBy: 10,
    },
  ],
  [
    45595,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB107_EP14",
      divideBy: 10,
    },
  ],
  [
    45596,
    {
      key: "HOT_GAS_EB106_EP15_BT89",
      divideBy: 10,
    },
  ],
  [
    45597,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB106_EP15",
      divideBy: 10,
    },
  ],
  [
    45598,
    {
      key: "HOT_GAS_EB106_EP14_BT89",
      divideBy: 10,
    },
  ],
  [
    45599,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB106_EP14",
      divideBy: 10,
    },
  ],
  [
    45600,
    {
      key: "HOT_GAS_EB105_EP15_BT89",
      divideBy: 10,
    },
  ],
  [
    45601,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB105_EP15",
      divideBy: 10,
    },
  ],
  [
    45602,
    {
      key: "HOT_GAS_EB105_EP14_BT89",
      divideBy: 10,
    },
  ],
  [
    45603,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB105_EP14",
      divideBy: 10,
    },
  ],
  [
    45604,
    {
      key: "HOT_GAS_EB104_EP15_BT89",
      divideBy: 10,
    },
  ],
  [
    45605,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB104_EP15",
      divideBy: 10,
    },
  ],
  [
    45606,
    {
      key: "HOT_GAS_EB104_EP14_BT89",
      divideBy: 10,
    },
  ],
  [
    45607,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB104_EP14",
      divideBy: 10,
    },
  ],
  [
    45608,
    {
      key: "HOT_GAS_EB103_EP15_BT89",
      divideBy: 10,
    },
  ],
  [
    45609,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB103_EP15",
      divideBy: 10,
    },
  ],
  [
    45610,
    {
      key: "HOT_GAS_EB103_EP14_BT89",
      divideBy: 10,
    },
  ],
  [
    45611,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB103_EP14",
      divideBy: 10,
    },
  ],
  [
    45612,
    {
      key: "HOT_GAS_EB102_EP15_BT89",
      divideBy: 10,
    },
  ],
  [
    45613,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB102_EP15",
      divideBy: 10,
    },
  ],
  [
    45614,
    {
      key: "HOT_GAS_EB102_EP14_BT89",
      divideBy: 10,
    },
  ],
  [
    45615,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB102_EP14",
      divideBy: 10,
    },
  ],
  [
    45616,
    {
      key: "HOT_GAS_EB101_EP15_BT89",
      divideBy: 10,
    },
  ],
  [
    45617,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB101_EP15",
      divideBy: 10,
    },
  ],
  [
    45618,
    {
      key: "HOT_GAS_EB101_EP14_BT89",
      divideBy: 10,
    },
  ],
  [
    45619,
    {
      key: "CALCULATED_POWER_OUTDOOR_UNIT_EB101_EP14",
      divideBy: 10,
    },
  ],
  [
    45624,
    {
      key: "_EB108",
    },
  ],
  [
    45625,
    {
      key: "_EB107",
    },
  ],
  [
    45626,
    {
      key: "_EB106",
    },
  ],
  [
    45627,
    {
      key: "_EB105",
    },
  ],
  [
    45628,
    {
      key: "_EB104",
    },
  ],
  [
    45629,
    {
      key: "_EB103",
    },
  ],
  [
    45630,
    {
      key: "_EB102",
    },
  ],
  [
    45631,
    {
      key: "_EB101",
    },
  ],
  [
    45632,
    {
      key: "_EB100",
    },
  ],
  [
    45633,
    {
      key: "SET_TO_SET_HEAT_COMPRESSOR_FREQUENCY",
    },
  ],
  [
    45634,
    {
      key: "SET_TO_SET_CHOOSE_THE_COMPRESSOR_FREQUENCY",
    },
  ],
  [
    45637,
    {
      key: "HEAT_METER_BUILT_IN_PASSIVE_COOLING",
      divideBy: 10,
    },
  ],
  [
    45639,
    {
      key: "CALCULATED_SPEED_HMP_EP15",
    },
  ],
  [
    45640,
    {
      key: "CALCULATED_SPEED_HMP_EP14",
    },
  ],
  [
    45641,
    {
      key: "COM_FAILURE_TSS",
    },
  ],
  [
    45645,
    {
      key: "CLIMATE_SYSTEM_PRESSURE_ALARM",
    },
  ],
  [
    45668,
    {
      key: "ROOM_TEMP_COOLING_EP47_BT50",
      divideBy: 10,
    },
  ],
  [
    45669,
    {
      key: "ROOM_TEMP_COOLING_EP46_BT50",
      divideBy: 10,
    },
  ],
  [
    45670,
    {
      key: "ROOM_TEMP_COOLING_EP45_BT50",
      divideBy: 10,
    },
  ],
  [
    45671,
    {
      key: "ROOM_TEMP_COOLING_EP44_BT50",
      divideBy: 10,
    },
  ],
  [
    45672,
    {
      key: "ROOM_TEMP_COOLING_EP23_BT50",
      divideBy: 10,
    },
  ],
  [
    45673,
    {
      key: "ROOM_TEMP_COOLING_EP22_BT50",
      divideBy: 10,
    },
  ],
  [
    45674,
    {
      key: "ROOM_TEMP_COOLING_EP21_BT50",
      divideBy: 10,
    },
  ],
  [
    45675,
    {
      key: "ROOM_TEMP_COOLING_BT50",
      divideBy: 10,
    },
  ],
  [
    45676,
    {
      key: "ROOM_TEMP_EQ1_BT50",
      divideBy: 10,
    },
  ],
  [
    45677,
    {
      key: "BRINE_IN_BT26",
      divideBy: 10,
    },
  ],
  [
    45678,
    {
      key: "ROOM_TEMP_COOLINGAVERAGE_EP47_BT50",
      divideBy: 10,
    },
  ],
  [
    45679,
    {
      key: "ROOM_TEMP_COOLINGAVERAGE_EP46_BT50",
      divideBy: 10,
    },
  ],
  [
    45680,
    {
      key: "ROOM_TEMP_COOLINGAVERAGE_EP45_BT50",
      divideBy: 10,
    },
  ],
  [
    45681,
    {
      key: "ROOM_TEMP_COOLINGAVERAGE_EP44_BT50",
      divideBy: 10,
    },
  ],
  [
    45682,
    {
      key: "ROOM_TEMP_COOLINGAVERAGE_EP23_BT50",
      divideBy: 10,
    },
  ],
  [
    45683,
    {
      key: "ROOM_TEMP_COOLINGAVERAGE_EP22_BT50",
      divideBy: 10,
    },
  ],
  [
    45684,
    {
      key: "ROOM_TEMP_COOLINGAVERAGE_EP21_BT50",
      divideBy: 10,
    },
  ],
  [
    45685,
    {
      key: "ROOM_TEMP_COOLINGAVERAGE_BT50",
      divideBy: 10,
    },
  ],
  [
    45702,
    {
      key: "EP15_FLOW_INPUT_BF1",
      divideBy: 10,
    },
  ],
  [
    45703,
    {
      key: "EP14_FLOW_INPUT_BF1",
      divideBy: 10,
    },
  ],
  [
    45707,
    {
      key: "STATE_PVT_SOURCE_SHUNT",
    },
  ],
  [
    45708,
    {
      key: "EXTERNAL_BLOCKING",
    },
  ],
  [
    45709,
    {
      key: "FLM_4_EXERICSE_COOLING_DAMPER",
    },
  ],
  [
    45710,
    {
      key: "FLM_3_EXERICSE_COOLING_DAMPER",
    },
  ],
  [
    45711,
    {
      key: "FLM_2_EXERICSE_COOLING_DAMPER",
    },
  ],
  [
    45712,
    {
      key: "FLM_1_EXERICSE_COOLING_DAMPER",
    },
  ],
  [
    45713,
    {
      key: "FLM_4_EXERCISE_TIMER",
    },
  ],
  [
    45715,
    {
      key: "FLM_3_EXERCISE_TIMER",
    },
  ],
  [
    45717,
    {
      key: "FLM_2_EXERCISE_TIMER",
    },
  ],
  [
    45719,
    {
      key: "FLM_1_EXERCISE_TIMER",
    },
  ],
  [
    45721,
    {
      key: "FLM_4_EXERCISE_TIMER_DAYS",
    },
  ],
  [
    45722,
    {
      key: "FLM_3_EXERCISE_TIMER_DAYS",
    },
  ],
  [
    45723,
    {
      key: "FLM_2_EXERCISE_TIMER_DAYS",
    },
  ],
  [
    45724,
    {
      key: "FLM_1_EXERCISE_TIMER_DAYS",
    },
  ],
  [
    45733,
    {
      key: "SYSTEM8_SHUNT_VALUE",
    },
  ],
  [
    45734,
    {
      key: "SYSTEM7_SHUNT_VALUE",
    },
  ],
  [
    45735,
    {
      key: "SYSTEM6_SHUNT_VALUE",
    },
  ],
  [
    45736,
    {
      key: "SYSTEM5_SHUNT_VALUE",
    },
  ],
  [
    45737,
    {
      key: "SYSTEM4_SHUNT_VALUE",
    },
  ],
  [
    45738,
    {
      key: "SYSTEM3_SHUNT_VALUE",
    },
  ],
  [
    45739,
    {
      key: "SYSTEM2_SHUNT_VALUE",
    },
  ],
  [
    45741,
    {
      key: "COM_FAILURE_PVT",
    },
  ],
  [
    45742,
    {
      key: "SENSOR_ERROR_EQ1_BT50",
    },
  ],
  [
    45743,
    {
      key: "BRINE_IN_BT27",
      divideBy: 10,
    },
  ],
  [
    45744,
    {
      key: "BRINE_IN_BT57",
      divideBy: 10,
    },
  ],
  [
    45745,
    {
      key: "BRINE_IN_BT58",
      divideBy: 10,
    },
  ],
  [
    45746,
    {
      key: "SOLAR_COLLECTOR_TEMP_BT53",
      divideBy: 10,
    },
  ],
  [
    45748,
    {
      key: "PVT_SOURCE_UPSTART_TIMER",
    },
  ],
  [
    45749,
    {
      key: "PVT_SOURCE",
    },
  ],
  [
    45750,
    {
      key: "PVT_SOURCE_CHECK_LOCK_STATE",
    },
  ],
  [
    45751,
    {
      key: "PVT_SOURCESAVED_VALUE_BT53",
    },
  ],
  [
    45752,
    {
      key: "PVT_SOURCE_RESET_TIMER",
    },
  ],
  [
    45753,
    {
      key: "BLOCK_CPRS_AND_FAN_I_AIRSITE",
    },
  ],
  [
    45754,
    {
      key: "EXERICSE_ACTIVE_QM41",
    },
  ],
  [
    45755,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED_ERS_4",
    },
  ],
  [
    45756,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED_ERS_3",
    },
  ],
  [
    45757,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED_ERS_2",
    },
  ],
  [
    45758,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED_ERS_1",
    },
  ],
  [
    45759,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED_ERS_4",
    },
  ],
  [
    45760,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED_ERS_3",
    },
  ],
  [
    45761,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED_ERS_2",
    },
  ],
  [
    45762,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED_ERS_1",
    },
  ],
  [
    45763,
    {
      key: "DCV_TIME_BETWEEN_FAN_SPEED_CHANGES_ERS_1",
    },
  ],
  [
    45764,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS_ERS_4",
    },
  ],
  [
    45765,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS_ERS_3",
    },
  ],
  [
    45766,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS_ERS_2",
    },
  ],
  [
    45767,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS_ERS_1",
    },
  ],
  [
    45768,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS_ERS_4",
    },
  ],
  [
    45769,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS_ERS_3",
    },
  ],
  [
    45770,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS_ERS_2",
    },
  ],
  [
    45771,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS_ERS_1",
    },
  ],
  [
    45772,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1_EB108",
    },
  ],
  [
    45773,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2_EB108",
    },
  ],
  [
    45774,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2_EB107",
    },
  ],
  [
    45775,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2_EB106",
    },
  ],
  [
    45776,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2_EB105",
    },
  ],
  [
    45777,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2_EB104",
    },
  ],
  [
    45778,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2_EB103",
    },
  ],
  [
    45779,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2_EB102",
    },
  ],
  [
    45780,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2_EB101",
    },
  ],
  [
    45781,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_2",
    },
  ],
  [
    45782,
    {
      key: "AUX_BLOCKING_SYSTEM",
    },
  ],
  [
    45796,
    {
      key: "SENSOR_ERROR_TSS_BT1",
    },
  ],
  [
    47001,
    {
      key: "MODELL",
    },
  ],
  [
    47004,
    {
      key: "HEAT_CURVE_S4",
    },
  ],
  [
    47005,
    {
      key: "HEAT_CURVE_S3",
    },
  ],
  [
    47006,
    {
      key: "HEAT_CURVE_S2",
    },
  ],
  [
    47007,
    {
      key: "HEAT_CURVE_S1",
    },
  ],
  [
    47008,
    {
      key: "HEAT_OFFSET_S4",
    },
  ],
  [
    47009,
    {
      key: "HEAT_OFFSET_S3",
    },
  ],
  [
    47010,
    {
      key: "HEAT_OFFSET_S2",
    },
  ],
  [
    47011,
    {
      key: "HEAT_OFFSET_S1",
    },
  ],
  [
    47012,
    {
      key: "MIN_SUPPLY_SYSTEM_4",
      divideBy: 10,
    },
  ],
  [
    47013,
    {
      key: "MIN_SUPPLY_SYSTEM_3",
      divideBy: 10,
    },
  ],
  [
    47014,
    {
      key: "MIN_SUPPLY_SYSTEM_2",
      divideBy: 10,
    },
  ],
  [
    47015,
    {
      key: "MIN_SUPPLY_SYSTEM_1",
      divideBy: 10,
    },
  ],
  [
    47016,
    {
      key: "MAX_SUPPLY_SYSTEM_4",
      divideBy: 10,
    },
  ],
  [
    47017,
    {
      key: "MAX_SUPPLY_SYSTEM_3",
      divideBy: 10,
    },
  ],
  [
    47018,
    {
      key: "MAX_SUPPLY_SYSTEM_2",
      divideBy: 10,
    },
  ],
  [
    47019,
    {
      key: "MAX_SUPPLY_SYSTEM_1",
      divideBy: 10,
    },
  ],
  [
    47020,
    {
      key: "OWN_HEATING_CURVE_P7",
      divideBy: 10,
    },
  ],
  [
    47021,
    {
      key: "OWN_HEATING_CURVE_P6",
      divideBy: 10,
    },
  ],
  [
    47022,
    {
      key: "OWN_HEATING_CURVE_P5",
      divideBy: 10,
    },
  ],
  [
    47023,
    {
      key: "OWN_HEATING_CURVE_P4",
      divideBy: 10,
    },
  ],
  [
    47024,
    {
      key: "OWN_HEATING_CURVE_P3",
      divideBy: 10,
    },
  ],
  [
    47025,
    {
      key: "OWN_HEATING_CURVE_P2",
      divideBy: 10,
    },
  ],
  [
    47026,
    {
      key: "OWN_HEATING_CURVE_P1",
      divideBy: 10,
    },
  ],
  [
    47027,
    {
      key: "POINT_OFFSET_OUTDOOR_TEMP",
      divideBy: 10,
    },
  ],
  [
    47028,
    {
      key: "POINT_OFFSET",
      divideBy: 10,
    },
  ],
  [
    47029,
    {
      key: "EXTERNAL_ADJUSTMENT_S4",
    },
  ],
  [
    47030,
    {
      key: "EXTERNAL_ADJUSTMENT_S3",
    },
  ],
  [
    47031,
    {
      key: "EXTERNAL_ADJUSTMENT_S2",
    },
  ],
  [
    47032,
    {
      key: "EXTERNAL_ADJUSTMENT_S1",
    },
  ],
  [
    47033,
    {
      key: "EXTERNAL_ADJUSTMENT_WITH_ROOM_SENSOR_S4",
      divideBy: 10,
    },
  ],
  [
    47034,
    {
      key: "EXTERNAL_ADJUSTMENT_WITH_ROOM_SENSOR_S3",
      divideBy: 10,
    },
  ],
  [
    47035,
    {
      key: "EXTERNAL_ADJUSTMENT_WITH_ROOM_SENSOR_S2",
      divideBy: 10,
    },
  ],
  [
    47036,
    {
      key: "EXTERNAL_ADJUSTMENT_WITH_ROOM_SENSOR_S1",
      divideBy: 10,
    },
  ],
  [
    47041,
    {
      key: "HOT_WATER_COMFORT_MODE",
    },
  ],
  [
    47043,
    {
      key: "START_TEMPERATURE_HW_LUXURY",
      divideBy: 10,
    },
  ],
  [
    47044,
    {
      key: "START_TEMPERATURE_HW_NORMAL",
      divideBy: 10,
    },
  ],
  [
    47045,
    {
      key: "START_TEMPERATURE_HW_ECONOMY",
      divideBy: 10,
    },
  ],
  [
    47046,
    {
      key: "STOP_TEMPERATURE_PERIODIC_HW",
      divideBy: 10,
    },
  ],
  [
    47047,
    {
      key: "STOP_TEMPERATURE_HW_LUXURY",
      divideBy: 10,
    },
  ],
  [
    47048,
    {
      key: "STOP_TEMPERATURE_HW_NORMAL",
      divideBy: 10,
    },
  ],
  [
    47049,
    {
      key: "STOP_TEMPERATURE_HW_ECONOMY",
      divideBy: 10,
    },
  ],
  [
    47050,
    {
      key: "PERIODIC_HW",
    },
  ],
  [
    47051,
    {
      key: "PERIODIC_HW_INTERVAL",
    },
  ],
  [
    47052,
    {
      key: "START_TIME_PERIODIC_HW",
    },
  ],
  [
    47053,
    {
      key: "HOT_WATER_CIRCULATION",
    },
  ],
  [
    47054,
    {
      key: "RUN_TIME_HWC",
    },
  ],
  [
    47055,
    {
      key: "STILL_TIME_HWC",
    },
  ],
  [
    47056,
    {
      key: "START_TIME_HWC_PERIOD_3",
    },
  ],
  [
    47057,
    {
      key: "START_TIME_HWC_PERIOD_2",
    },
  ],
  [
    47058,
    {
      key: "START_TIME_HWC_PERIOD_1",
    },
  ],
  [
    47059,
    {
      key: "STOP_TIME_HWC_PERIOD_3",
    },
  ],
  [
    47060,
    {
      key: "STOP_TIME_HWC_PERIOD_2",
    },
  ],
  [
    47061,
    {
      key: "STOP_TIME_HWC_PERIOD_1",
    },
  ],
  [
    47062,
    {
      key: "HW_CHARGE_OFFSET",
      divideBy: 10,
    },
  ],
  [
    47092,
    {
      key: "MANUAL_COMPFREQ_HW",
    },
  ],
  [
    47093,
    {
      key: "MANUAL_COMPFREQ_SPEED_HW",
    },
  ],
  [
    47094,
    {
      key: "SEC_PER_COMPFREQ_STEP",
    },
  ],
  [
    47095,
    {
      key: "MAX_COMPFREQ_STEP",
    },
  ],
  [
    47096,
    {
      key: "MANUAL_COMPFREQ_HEATING",
    },
  ],
  [
    47097,
    {
      key: "MIN_SPEED_AFTER_START",
    },
  ],
  [
    47098,
    {
      key: "MIN_SPEED_AFTER_HW",
    },
  ],
  [
    47099,
    {
      key: "GMZ",
    },
  ],
  [
    47100,
    {
      key: "MAX_DIFF_VBF_BERVBF",
      divideBy: 10,
    },
  ],
  [
    47101,
    {
      key: "COMP_FREQ_REG_P",
    },
  ],
  [
    47102,
    {
      key: "COMP_FREQ_MAX_DELTA_F",
    },
  ],
  [
    47103,
    {
      key: "MIN_COMP_FREQ",
    },
  ],
  [
    47104,
    {
      key: "MAX_COMP_FREQ",
    },
  ],
  [
    47105,
    {
      key: "COMPRESSOR_SPEED",
    },
  ],
  [
    47131,
    {
      key: "LANGUAGE",
    },
  ],
  [
    47132,
    {
      key: "START_GUIDE",
    },
  ],
  [
    47134,
    {
      key: "PERIOD_HW",
    },
  ],
  [
    47135,
    {
      key: "PERIOD_HEAT",
    },
  ],
  [
    47136,
    {
      key: "PERIOD_POOL",
    },
  ],
  [
    47137,
    {
      key: "OPERATIONAL_MODE",
    },
  ],
  [
    47138,
    {
      key: "OPERATIONAL_MODE_HEAT_MEDIUM_PUMP",
    },
  ],
  [
    47139,
    {
      key: "OPERATIONAL_MODE_BRINE_MEDIUM_PUMP",
    },
  ],
  [
    47206,
    {
      key: "DM_START_HEATING",
    },
  ],
  [
    47207,
    {
      key: "DM_START_COOLING",
    },
  ],
  [
    47208,
    {
      key: "DM_START_ADD",
    },
  ],
  [
    47209,
    {
      key: "DM_BETWEEN_ADD_STEPS",
    },
  ],
  [
    47210,
    {
      key: "DM_START_ADD_WITH_SHUNT",
    },
  ],
  [
    47212,
    {
      key: "SET_MAX_ELECTRICAL_ADDITION",
      divideBy: 100,
    },
  ],
  [
    47214,
    {
      key: "ADDITION_FUSE_SIZE",
      divideBy: 0,
    },
  ],
  [
    47215,
    {
      key: "PHASE_ORDER",
    },
  ],
  [
    47216,
    {
      key: "PHASE_ORDER",
    },
  ],
  [
    47217,
    {
      key: "PHASE_ORDER",
    },
  ],
  [
    47260,
    {
      key: "SELECTED_FAN_SPEED",
    },
  ],
  [
    47261,
    {
      key: "EXHAUST_FAN_SPEED_4_AZ1",
    },
  ],
  [
    47262,
    {
      key: "EXHAUST_FAN_SPEED_3_AZ1",
    },
  ],
  [
    47263,
    {
      key: "EXHAUST_FAN_SPEED_2_AZ1",
    },
  ],
  [
    47264,
    {
      key: "EXHAUST_FAN_SPEED_1_AZ1",
    },
  ],
  [
    47265,
    {
      key: "EXHAUST_FAN_SPEED_NORMAL_AZ1",
    },
  ],
  [
    47266,
    {
      key: "SUPPLY_FAN_SPEED_4",
    },
  ],
  [
    47267,
    {
      key: "SUPPLY_FAN_SPEED_3",
    },
  ],
  [
    47268,
    {
      key: "SUPPLY_FAN_SPEED_2",
    },
  ],
  [
    47269,
    {
      key: "SUPPLY_FAN_SPEED_1",
    },
  ],
  [
    47270,
    {
      key: "SUPPLY_FAN_SPEED_NORMAL",
    },
  ],
  [
    47271,
    {
      key: "FAN_RETURN_TIME_4",
    },
  ],
  [
    47272,
    {
      key: "FAN_RETURN_TIME_3",
    },
  ],
  [
    47273,
    {
      key: "FAN_RETURN_TIME_2",
    },
  ],
  [
    47274,
    {
      key: "FAN_RETURN_TIME_1",
    },
  ],
  [
    47275,
    {
      key: "FILTER_REMINDER_PERIOD",
    },
  ],
  [
    47276,
    {
      key: "FLOOR_DRYING_FUNCTION",
      divideBy: 0,
    },
  ],
  [
    47277,
    {
      key: "FLOOR_DRYING_PERIOD_7",
    },
  ],
  [
    47278,
    {
      key: "FLOOR_DRYING_PERIOD_6",
    },
  ],
  [
    47279,
    {
      key: "FLOOR_DRYING_PERIOD_5",
    },
  ],
  [
    47280,
    {
      key: "FLOOR_DRYING_PERIOD_4",
    },
  ],
  [
    47281,
    {
      key: "FLOOR_DRYING_PERIOD_3",
    },
  ],
  [
    47282,
    {
      key: "FLOOR_DRYING_PERIOD_2",
    },
  ],
  [
    47283,
    {
      key: "FLOOR_DRYING_PERIOD_1",
    },
  ],
  [
    47284,
    {
      key: "FLOOR_DRYING_TEMP_7",
      divideBy: 10,
    },
  ],
  [
    47285,
    {
      key: "FLOOR_DRYING_TEMP_6",
      divideBy: 10,
    },
  ],
  [
    47286,
    {
      key: "FLOOR_DRYING_TEMP_5",
      divideBy: 10,
    },
  ],
  [
    47287,
    {
      key: "FLOOR_DRYING_TEMP_4",
      divideBy: 10,
    },
  ],
  [
    47288,
    {
      key: "FLOOR_DRYING_TEMP_3",
      divideBy: 10,
    },
  ],
  [
    47289,
    {
      key: "FLOOR_DRYING_TEMP_2",
      divideBy: 10,
    },
  ],
  [
    47290,
    {
      key: "FLOOR_DRYING_TEMP_1",
      divideBy: 10,
    },
  ],
  [
    47291,
    {
      key: "FLOOR_DRYING_TIMER",
    },
  ],
  [
    47292,
    {
      key: "TREND_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    47293,
    {
      key: "TRANSFER_TIME_HW_HEAT",
    },
  ],
  [
    47294,
    {
      key: "USE_AIRFLOW_DEFROST",
    },
  ],
  [
    47295,
    {
      key: "AIRFLOW_REDUCTION_TRIG",
    },
  ],
  [
    47296,
    {
      key: "AIRFLOW_DEFROST_DONE",
    },
  ],
  [
    47297,
    {
      key: "INITIATE_INVERTER",
    },
  ],
  [
    47298,
    {
      key: "FORCE_INVERTER_INIT",
    },
  ],
  [
    47299,
    {
      key: "MIN_TIME_DEFROST",
    },
  ],
  [
    47300,
    {
      key: "DOT",
      divideBy: 10,
    },
  ],
  [
    47301,
    {
      key: "DELTA_T_AT_DOT",
      divideBy: 10,
    },
  ],
  [
    47302,
    {
      key: "CLIMATE_SYSTEM_2_ACCESSORY",
    },
  ],
  [
    47303,
    {
      key: "CLIMATE_SYSTEM_3_ACCESSORY",
    },
  ],
  [
    47304,
    {
      key: "CLIMATE_SYSTEM_4_ACCESSORY",
    },
  ],
  [
    47305,
    {
      key: "CLIMATE_SYSTEM_4_MIXING_VALVE_AMP",
    },
  ],
  [
    47306,
    {
      key: "CLIMATE_SYSTEM_3_MIXING_VALVE_AMP",
    },
  ],
  [
    47307,
    {
      key: "CLIMATE_SYSTEM_2_MIXING_VALVE_AMP",
    },
  ],
  [
    47308,
    {
      key: "CLIMATE_SYSTEM_4_SHUNT_WAIT",
    },
  ],
  [
    47309,
    {
      key: "CLIMATE_SYSTEM_3_SHUNT_WAIT",
    },
  ],
  [
    47310,
    {
      key: "CLIMATE_SYSTEM_2_SHUNT_WAIT",
    },
  ],
  [
    47311,
    {
      key: "FLM_ACCESSORY",
    },
  ],
  [
    47312,
    {
      key: "FLM_PUMP_1",
    },
  ],
  [
    47313,
    {
      key: "FLM_1_DEFROST",
    },
  ],
  [
    47314,
    {
      key: "POOL_ACCESSORY",
    },
  ],
  [
    47315,
    {
      key: "START_TEMP",
      divideBy: 10,
    },
  ],
  [
    47316,
    {
      key: "STOP_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    47317,
    {
      key: "SHUNT_CONTROLLED_ADD_ACCESSORY",
    },
  ],
  [
    47318,
    {
      key: "SHUNT_CONTROLLED_ADD_MIN_TEMP",
      divideBy: 10,
    },
  ],
  [
    47319,
    {
      key: "SHUNT_CONTROLLED_ADD_MIN_RUNTIME",
    },
  ],
  [
    47320,
    {
      key: "SHUNT_CONTROLLED_ADD_MIXING_VALVE_AMP",
    },
  ],
  [
    47321,
    {
      key: "SHUNT_CONTROLLED_ADD_MIXING_VALVE_WAIT",
    },
  ],
  [
    47322,
    {
      key: "STEP_CONTROLLED_ADD_ACCESSORY",
    },
  ],
  [
    47323,
    {
      key: "STEP_CONTROLLED_ADD_START_DM",
    },
  ],
  [
    47324,
    {
      key: "STEP_CONTROLLED_ADD_DIFF_DM",
    },
  ],
  [
    47325,
    {
      key: "MAX_STEP",
    },
  ],
  [
    47326,
    {
      key: "STEP_CONTROLLED_ADD_MODE",
    },
  ],
  [
    47327,
    {
      key: "GROUND_WATER_PUMP_ACCESSORY",
    },
  ],
  [
    47328,
    {
      key: "PCI_ACCESSORY",
    },
  ],
  [
    47329,
    {
      key: "COOLING_2_PIPE_ACCESSORY",
    },
  ],
  [
    47330,
    {
      key: "COOLING_4_PIPE_ACCESSORY",
    },
  ],
  [
    47331,
    {
      key: "MIN_COOLING_SUPPLY_TEMP",
      divideBy: 10,
    },
  ],
  [
    47332,
    {
      key: "COOLING_SUPPLY_TEMP_AT_20_C",
      divideBy: 10,
    },
  ],
  [
    47333,
    {
      key: "COOLING_SUPPLY_TEMP_AT_40_C",
      divideBy: 10,
    },
  ],
  [
    47334,
    {
      key: "COOLING_CLOSE_MIX_VALVES",
    },
  ],
  [
    47335,
    {
      key: "TIME_BETW_SWITCH_HEAT_COOL",
    },
  ],
  [
    47336,
    {
      key: "HEAT_AT_ROOM_UNDER_TEMP",
      divideBy: 10,
    },
  ],
  [
    47337,
    {
      key: "COOL_AT_ROOM_OVER_TEMP",
      divideBy: 10,
    },
  ],
  [
    47338,
    {
      key: "COOLING_MIX_VALVE_AMP",
    },
  ],
  [
    47339,
    {
      key: "COOLING_MIX_VALVE_STEP_DELAY",
    },
  ],
  [
    47340,
    {
      key: "COOLING_WITH_ROOM_SENSOR",
    },
  ],
  [
    47341,
    {
      key: "HPAC_ACCESSORY",
    },
  ],
  [
    47342,
    {
      key: "START_PASSIVE_COOLING_DM",
    },
  ],
  [
    47343,
    {
      key: "START_ACTIVE_COOLING_DM",
    },
  ],
  [
    47344,
    {
      key: "SOLAR_ACCESSORY",
    },
  ],
  [
    47347,
    {
      key: "SOLAR_MAX_TANK_TEMP",
    },
  ],
  [
    47348,
    {
      key: "SOLAR_MAX_PANEL_TEMP",
    },
  ],
  [
    47349,
    {
      key: "SOLAR_ANTI_FREEZE_TEMP",
    },
  ],
  [
    47350,
    {
      key: "SOLAR_COLLECTOR_START_COOLING_TEMP",
    },
  ],
  [
    47351,
    {
      key: "FJVM_ACCESSORY",
    },
  ],
  [
    47352,
    {
      key: "ACCESSORY_SMS40",
    },
  ],
  [
    47365,
    {
      key: "RMU_SYSTEM_1",
    },
  ],
  [
    47366,
    {
      key: "RMU_SYSTEM_2",
    },
  ],
  [
    47367,
    {
      key: "RMU_SYSTEM_3",
    },
  ],
  [
    47368,
    {
      key: "RMU_SYSTEM_4",
    },
  ],
  [
    47370,
    {
      key: "ALLOW_ADDITIVE_HEATING",
    },
  ],
  [
    47371,
    {
      key: "ALLOW_HEATING",
    },
  ],
  [
    47372,
    {
      key: "ALLOW_COOLING",
    },
  ],
  [
    47373,
    {
      key: "POOL_ACTIVATED",
    },
  ],
  [
    47374,
    {
      key: "START_TEMPERATURE_COOLING",
      divideBy: 10,
    },
  ],
  [
    47375,
    {
      key: "STOP_TEMPERATURE_HEATING",
      divideBy: 10,
    },
  ],
  [
    47376,
    {
      key: "STOP_TEMPERATURE_ADDITIVE",
      divideBy: 10,
    },
  ],
  [
    47377,
    {
      key: "OUTDOOR_FILTER_TIME",
    },
  ],
  [
    47378,
    {
      key: "MAX_DIFF_COMP",
      divideBy: 10,
    },
  ],
  [
    47379,
    {
      key: "MAX_DIFF_ADD",
      divideBy: 10,
    },
  ],
  [
    47380,
    {
      key: "LOW_BRINE_OUT_AUTORESET",
    },
  ],
  [
    47381,
    {
      key: "LOW_BRINE_OUT_TEMP_EP14",
      divideBy: 10,
    },
  ],
  [
    47382,
    {
      key: "HIGH_BRINE_IN",
    },
  ],
  [
    47383,
    {
      key: "HIGH_BRINE_IN_TEMP",
      divideBy: 10,
    },
  ],
  [
    47384,
    {
      key: "DATE_FORMAT",
    },
  ],
  [
    47385,
    {
      key: "TIME_FORMAT",
    },
  ],
  [
    47387,
    {
      key: "HW_PRODUCTION",
    },
  ],
  [
    47388,
    {
      key: "ALARM_LOWER_ROOM_TEMP",
    },
  ],
  [
    47389,
    {
      key: "ALARM_LOWER_HW_TEMP",
    },
  ],
  [
    47390,
    {
      key: "ALARM_AID_MODE",
    },
  ],
  [
    47391,
    {
      key: "USE_ROOM_SENSOR_S4",
    },
  ],
  [
    47392,
    {
      key: "USE_ROOM_SENSOR_S3",
    },
  ],
  [
    47393,
    {
      key: "USE_ROOM_SENSOR_S2",
    },
  ],
  [
    47394,
    {
      key: "USE_ROOM_SENSOR_S1",
    },
  ],
  [
    47395,
    {
      key: "SET_VALUE_S4",
      divideBy: 10,
    },
  ],
  [
    47396,
    {
      key: "SET_VALUE_S3",
      divideBy: 10,
    },
  ],
  [
    47397,
    {
      key: "SET_VALUE_S2",
      divideBy: 10,
    },
  ],
  [
    47398,
    {
      key: "SET_VALUE_S1",
      divideBy: 10,
    },
  ],
  [
    47399,
    {
      key: "ROOM_SENSOR_FACTOR_S4",
    },
  ],
  [
    47400,
    {
      key: "ROOM_SENSOR_FACTOR_S3",
    },
  ],
  [
    47401,
    {
      key: "ROOM_SENSOR_FACTOR_S2",
    },
  ],
  [
    47402,
    {
      key: "ROOM_SENSOR_FACTOR_S1",
    },
  ],
  [
    47403,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_S4",
    },
  ],
  [
    47404,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_S3",
    },
  ],
  [
    47405,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_S2",
    },
  ],
  [
    47406,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_S1",
    },
  ],
  [
    47407,
    {
      key: "AUX_5",
      divideBy: 0,
    },
  ],
  [
    47408,
    {
      key: "AUX_4",
      divideBy: 0,
    },
  ],
  [
    47409,
    {
      key: "AUX_3",
      divideBy: 0,
    },
  ],
  [
    47410,
    {
      key: "AUX_2",
      divideBy: 0,
    },
  ],
  [
    47411,
    {
      key: "AUX_1",
      divideBy: 0,
    },
  ],
  [
    47412,
    {
      key: "AUX_X7",
      divideBy: 0,
    },
  ],
  [
    47413,
    {
      key: "SPEED_CIRC_PUMP_HW",
    },
  ],
  [
    47414,
    {
      key: "SPEED_CIRC_PUMP_HEAT",
    },
  ],
  [
    47415,
    {
      key: "SPEED_CIRC_PUMP_POOL",
    },
  ],
  [
    47416,
    {
      key: "SPEED_CIRC_PUMP_IN_WAIT_MODE",
    },
  ],
  [
    47417,
    {
      key: "SPEED_CIRCULATION_PUMP_PASSIVE_COOLING_EP14",
    },
  ],
  [
    47418,
    {
      key: "SPEED_BRINE_PUMP",
    },
  ],
  [
    47421,
    {
      key: "TIME_BETWEEN_WRITES",
    },
  ],
  [
    47422,
    {
      key: "SCHEDULED_HW",
    },
  ],
  [
    47423,
    {
      key: "SCHEDULED_HW",
    },
  ],
  [
    47424,
    {
      key: "SCHEDULED_FAN",
    },
  ],
  [
    47425,
    {
      key: "SCHEDULED_FAN",
    },
  ],
  [
    47426,
    {
      key: "SCHEDULED_HEAT",
    },
  ],
  [
    47427,
    {
      key: "SCHEDULED_HEAT",
    },
  ],
  [
    47428,
    {
      key: "SCHEDULED_HEAT",
    },
  ],
  [
    47429,
    {
      key: "SCHEDULED_COOLING",
    },
  ],
  [
    47430,
    {
      key: "SCHEDULED_COOLING",
    },
  ],
  [
    47431,
    {
      key: "SCHEDULED_COOLING",
    },
  ],
  [
    47432,
    {
      key: "SCHEDULED_BLOCK",
    },
  ],
  [
    47433,
    {
      key: "SCHEDULED_BLOCK",
    },
  ],
  [
    47434,
    {
      key: "HOLIDAY",
    },
  ],
  [
    47442,
    {
      key: "PRESET_FLOW_CLIM_SYS",
    },
  ],
  [
    47443,
    {
      key: "STEP_CONFIG",
    },
  ],
  [
    47473,
    {
      key: "MAX_TIME_DEFROST",
    },
  ],
  [
    47525,
    {
      key: "HEAT_CURVE_S8",
    },
  ],
  [
    47526,
    {
      key: "HW_TEMP_LUX",
    },
  ],
  [
    47536,
    {
      key: "FAN_SYNCH_MODE",
    },
  ],
  [
    47537,
    {
      key: "NIGHT_COOLING",
    },
  ],
  [
    47538,
    {
      key: "START_ROOM_TEMP_NIGHT_COOLING",
      divideBy: 10,
    },
  ],
  [
    47539,
    {
      key: "NIGHT_COOLING_MIN_DIFF",
      divideBy: 10,
    },
  ],
  [
    47540,
    {
      key: "HEAT_DM_DIFF",
    },
  ],
  [
    47541,
    {
      key: "HW_TEMP_DIFF",
      divideBy: 10,
    },
  ],
  [
    47542,
    {
      key: "MAX_POOL_COMPR",
    },
  ],
  [
    47543,
    {
      key: "COOLING_DM_DIFF",
    },
  ],
  [
    47544,
    {
      key: "SOLAR_START_DELTA_T_GP4",
    },
  ],
  [
    47545,
    {
      key: "SOLAR_STOP_DELTA_T_GP4",
    },
  ],
  [
    47546,
    {
      key: "SOLAR_START_DELTA_T_GP15",
    },
  ],
  [
    47547,
    {
      key: "SOLAR_STOP_DELTA_T_GP15",
    },
  ],
  [
    47555,
    {
      key: "DEW_ACCESSORY",
    },
  ],
  [
    47556,
    {
      key: "DEH_ACCESSORY",
    },
  ],
  [
    47564,
    {
      key: "ALLOW_HEATING_SYS1",
    },
  ],
  [
    47565,
    {
      key: "ALLOW_HEATING_SYS2",
    },
  ],
  [
    47567,
    {
      key: "HEAT_CURVE_S7",
    },
  ],
  [
    47570,
    {
      key: "OPERATIONAL_MODE",
    },
  ],
  [
    47613,
    {
      key: "MAX_STEP",
      divideBy: 0,
    },
  ],
  [
    47614,
    {
      key: "INT_CONNECTED_ADD_MODE",
    },
  ],
  [
    47616,
    {
      key: "UTEDEL",
    },
  ],
  [
    47625,
    {
      key: "SPEED_V_RMEB_RARPUMP",
    },
  ],
  [
    47626,
    {
      key: "SPEED_LADDPUMP",
    },
  ],
  [
    47629,
    {
      key: "DM_START_EXT_ADD",
    },
  ],
  [
    47631,
    {
      key: "EXTERNAL_ADD_STEP_CONTROLLED",
    },
  ],
  [
    47632,
    {
      key: "EXTERNAL_ADD_MIN_RUNTIME",
    },
  ],
  [
    47633,
    {
      key: "STATE_EXT_ADD",
    },
  ],
  [
    47635,
    {
      key: "SCHEDULED_HW_ACTIVE",
    },
  ],
  [
    47636,
    {
      key: "SCHEDULED_HW_SYSTEM",
    },
  ],
  [
    47637,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47638,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47639,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47640,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47641,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47642,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47643,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47644,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47645,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47646,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47647,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47648,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47649,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47650,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47651,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47652,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47653,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47654,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47655,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47656,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47657,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47658,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47659,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47660,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47661,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47662,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47663,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47664,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47665,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47666,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47667,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47668,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47669,
    {
      key: "SCHEDULED_HW_ACTIVE",
    },
  ],
  [
    47670,
    {
      key: "SCHEDULED_HW_SYSTEM",
    },
  ],
  [
    47671,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47672,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47673,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47674,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47675,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47676,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47677,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47678,
    {
      key: "SCHEDULED_HW_START_TIME",
    },
  ],
  [
    47679,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47680,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47681,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47682,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47683,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47684,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47685,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47686,
    {
      key: "SCHEDULED_HW_STOP_TIME",
    },
  ],
  [
    47687,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47688,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47689,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47690,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47691,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47692,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47693,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47694,
    {
      key: "SCHEDULED_HW_SETTING",
    },
  ],
  [
    47695,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47696,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47697,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47698,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47699,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47700,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47701,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47702,
    {
      key: "SCHEDULED_HW_SETTING",
      divideBy: 10,
    },
  ],
  [
    47703,
    {
      key: "SCHEDULED_FAN_ACTIVE",
    },
  ],
  [
    47704,
    {
      key: "SCHEDULED_FAN_SYSTEM",
    },
  ],
  [
    47705,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47706,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47707,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47708,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47709,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47710,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47711,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47712,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47713,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47714,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47715,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47716,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47717,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47718,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47719,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47720,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47721,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47722,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47723,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47724,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47725,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47726,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47727,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47728,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47729,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47730,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47731,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47732,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47733,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47734,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47735,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47736,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47737,
    {
      key: "SCHEDULED_FAN_ACTIVE",
    },
  ],
  [
    47738,
    {
      key: "SCHEDULED_FAN_SYSTEM",
    },
  ],
  [
    47739,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47740,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47741,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47742,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47743,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47744,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47745,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47746,
    {
      key: "SCHEDULED_FAN_START_TIME",
    },
  ],
  [
    47747,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47748,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47749,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47750,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47751,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47752,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47753,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47754,
    {
      key: "SCHEDULED_FAN_STOP_TIME",
    },
  ],
  [
    47755,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47756,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47757,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47758,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47759,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47760,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47761,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47762,
    {
      key: "SCHEDULED_FAN_SETTING",
    },
  ],
  [
    47763,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47764,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47765,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47766,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47767,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47768,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47769,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47770,
    {
      key: "SCHEDULED_FAN_SETTING",
      divideBy: 10,
    },
  ],
  [
    47771,
    {
      key: "SCHEDULED_HEAT_ACTIVE",
    },
  ],
  [
    47772,
    {
      key: "SCHEDULED_HEAT_SYSTEM",
    },
  ],
  [
    47773,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47774,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47775,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47776,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47777,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47778,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47779,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47780,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47781,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47782,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47783,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47784,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47785,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47786,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47787,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47788,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47789,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47790,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47791,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47792,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47793,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47794,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47795,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47796,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47797,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47798,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47799,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47800,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47801,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47802,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47803,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47804,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47805,
    {
      key: "SCHEDULED_HEAT_ACTIVE",
    },
  ],
  [
    47806,
    {
      key: "SCHEDULED_HEAT_SYSTEM",
    },
  ],
  [
    47807,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47808,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47809,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47810,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47811,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47812,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47813,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47814,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47815,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47816,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47817,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47818,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47819,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47820,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47821,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47822,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47823,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47824,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47825,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47826,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47827,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47828,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47829,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47830,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47831,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47832,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47833,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47834,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47835,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47836,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47837,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47838,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47839,
    {
      key: "SCHEDULED_HEAT_ACTIVE",
    },
  ],
  [
    47840,
    {
      key: "SCHEDULED_HEAT_SYSTEM",
    },
  ],
  [
    47841,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47842,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47843,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47844,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47845,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47846,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47847,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47848,
    {
      key: "SCHEDULED_HEAT_START_TIME",
    },
  ],
  [
    47849,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47850,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47851,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47852,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47853,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47854,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47855,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47856,
    {
      key: "SCHEDULED_HEAT_STOP_TIME",
    },
  ],
  [
    47857,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47858,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47859,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47860,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47861,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47862,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47863,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47864,
    {
      key: "SCHEDULED_HEAT_SETTING",
    },
  ],
  [
    47865,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47866,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47867,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47868,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47869,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47870,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47871,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47872,
    {
      key: "SCHEDULED_HEAT_SETTING",
      divideBy: 10,
    },
  ],
  [
    47873,
    {
      key: "SCHEDULED_COOLING_ACTIVE",
    },
  ],
  [
    47874,
    {
      key: "SCHEDULED_COOLING_SYSTEM",
    },
  ],
  [
    47875,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47876,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47877,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47878,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47879,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47880,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47881,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47882,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47883,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47884,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47885,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47886,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47887,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47888,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47889,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47890,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47891,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47892,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47893,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47894,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47895,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47896,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47897,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47898,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47899,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47900,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47901,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47902,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47903,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47904,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47905,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47906,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47907,
    {
      key: "SCHEDULED_COOLING_ACTIVE",
    },
  ],
  [
    47908,
    {
      key: "SCHEDULED_COOLING_SYSTEM",
    },
  ],
  [
    47909,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47910,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47911,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47912,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47913,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47914,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47915,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47916,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47917,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47918,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47919,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47920,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47921,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47922,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47923,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47924,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47925,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47926,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47927,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47928,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47929,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47930,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47931,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47932,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47933,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47934,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47935,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47936,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47937,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47938,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47939,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47940,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47941,
    {
      key: "SCHEDULED_COOLING_ACTIVE",
    },
  ],
  [
    47942,
    {
      key: "SCHEDULED_COOLING_SYSTEM",
    },
  ],
  [
    47943,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47944,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47945,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47946,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47947,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47948,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47949,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47950,
    {
      key: "SCHEDULED_COOLING_START_TIME",
    },
  ],
  [
    47951,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47952,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47953,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47954,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47955,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47956,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47957,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47958,
    {
      key: "SCHEDULED_COOLING_STOP_TIME",
    },
  ],
  [
    47959,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47960,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47961,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47962,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47963,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47964,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47965,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47966,
    {
      key: "SCHEDULED_COOLING_SETTING",
    },
  ],
  [
    47967,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47968,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47969,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47970,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47971,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47972,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47973,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47974,
    {
      key: "SCHEDULED_COOLING_SETTING",
      divideBy: 10,
    },
  ],
  [
    47975,
    {
      key: "SCHEDULED_BLOCK_ACTIVE",
    },
  ],
  [
    47976,
    {
      key: "SCHEDULED_BLOCK_SYSTEM",
    },
  ],
  [
    47977,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    47978,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    47979,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    47980,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    47981,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    47982,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    47983,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    47984,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    47985,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    47986,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    47987,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    47988,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    47989,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    47990,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    47991,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    47992,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    47993,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    47994,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    47995,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    47996,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    47997,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    47998,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    47999,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48000,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48001,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48002,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48003,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48004,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48005,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48006,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48007,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48008,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48009,
    {
      key: "SCHEDULED_BLOCK_ACTIVE",
    },
  ],
  [
    48010,
    {
      key: "SCHEDULED_BLOCK_SYSTEM",
    },
  ],
  [
    48011,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    48012,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    48013,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    48014,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    48015,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    48016,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    48017,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    48018,
    {
      key: "SCHEDULED_BLOCK_START_TIME",
    },
  ],
  [
    48019,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    48020,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    48021,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    48022,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    48023,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    48024,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    48025,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    48026,
    {
      key: "SCHEDULED_BLOCK_STOP_TIME",
    },
  ],
  [
    48027,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48028,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48029,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48030,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48031,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48032,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48033,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48034,
    {
      key: "SCHEDULED_BLOCK_SETTING",
    },
  ],
  [
    48035,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48036,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48037,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48038,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48039,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48040,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48041,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48042,
    {
      key: "SCHEDULED_BLOCK_SETTING",
      divideBy: 10,
    },
  ],
  [
    48043,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48044,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48045,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48046,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48047,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48048,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48049,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48050,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48051,
    {
      key: "HOLIDAY",
      divideBy: 10,
    },
  ],
  [
    48052,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48053,
    {
      key: "FLM_2_SPEED_4_AZ2",
    },
  ],
  [
    48054,
    {
      key: "FLM_2_SPEED_3_AZ2",
    },
  ],
  [
    48055,
    {
      key: "FLM_2_SPEED_2_AZ2",
    },
  ],
  [
    48056,
    {
      key: "FLM_2_SPEED_1_AZ2",
    },
  ],
  [
    48057,
    {
      key: "FLM_2_SPEED_NORMAL_AZ2",
    },
  ],
  [
    48058,
    {
      key: "FLM_3_SPEED_4_AZ3",
    },
  ],
  [
    48059,
    {
      key: "FLM_3_SPEED_3_AZ3",
    },
  ],
  [
    48060,
    {
      key: "FLM_3_SPEED_2_AZ3",
    },
  ],
  [
    48061,
    {
      key: "FLM_3_SPEED_1_AZ3",
    },
  ],
  [
    48062,
    {
      key: "FLM_3_SPEED_NORMAL_AZ3",
    },
  ],
  [
    48063,
    {
      key: "FLM_4_SPEED_4_AZ4",
    },
  ],
  [
    48064,
    {
      key: "FLM_4_SPEED_3_AZ4",
    },
  ],
  [
    48065,
    {
      key: "FLM_4_SPEED_2_AZ4",
    },
  ],
  [
    48066,
    {
      key: "FLM_4_SPEED_1_AZ4",
    },
  ],
  [
    48067,
    {
      key: "FLM_4_SPEED_NORMAL_AZ4",
    },
  ],
  [
    48068,
    {
      key: "FLM_4_ACCESSORY",
    },
  ],
  [
    48069,
    {
      key: "FLM_3_ACCESSORY",
    },
  ],
  [
    48070,
    {
      key: "FLM_2_ACCESSORY",
    },
  ],
  [
    48071,
    {
      key: "FLM_1_ACCESSORY",
    },
  ],
  [
    48072,
    {
      key: "DM_DIFF_START_ADD",
    },
  ],
  [
    48073,
    {
      key: "FLM_1_COOLING",
    },
  ],
  [
    48074,
    {
      key: "COOL_HEAT_SENSOR_SET_POINT",
    },
  ],
  [
    48083,
    {
      key: "SOLAR_POOL_HEATING",
    },
  ],
  [
    48085,
    {
      key: "HEAT_MEDIUM_PUMP_MANUAL_SPEED",
    },
  ],
  [
    48086,
    {
      key: "HOT_WATER_TANK_TYPE",
    },
  ],
  [
    48087,
    {
      key: "POOL_2_ACCESSORY",
    },
  ],
  [
    48088,
    {
      key: "POOL_1_ACCESSORY",
    },
  ],
  [
    48089,
    {
      key: "START_TEMP",
      divideBy: 10,
    },
  ],
  [
    48090,
    {
      key: "START_TEMP",
      divideBy: 10,
    },
  ],
  [
    48091,
    {
      key: "STOP_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    48092,
    {
      key: "STOP_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    48093,
    {
      key: "ACTIVATED",
    },
  ],
  [
    48094,
    {
      key: "ACTIVATED",
    },
  ],
  [
    48099,
    {
      key: "EXTERNAL_ADD_ACCESSORY",
    },
  ],
  [
    48102,
    {
      key: "SPEED_HEAT_MEDIUM_PUMP",
    },
  ],
  [
    48103,
    {
      key: "SPEED_CHARGE_PUMP",
    },
  ],
  [
    48107,
    {
      key: "CHARGE_PUMP_MANUAL_SPEED",
    },
  ],
  [
    48120,
    {
      key: "HW_COMFORT",
    },
  ],
  [
    48121,
    {
      key: "UTEDEL",
    },
  ],
  [
    48122,
    {
      key: "UTEDEL",
    },
  ],
  [
    48123,
    {
      key: "UTEDEL",
    },
  ],
  [
    48124,
    {
      key: "UTEDEL",
    },
  ],
  [
    48125,
    {
      key: "UTEDEL",
    },
  ],
  [
    48126,
    {
      key: "UTEDEL",
    },
  ],
  [
    48127,
    {
      key: "UTEDEL",
    },
  ],
  [
    48128,
    {
      key: "UTEDEL",
    },
  ],
  [
    48130,
    {
      key: "MANUAL_HEAT_MEDIUM_PUMP_SPEED",
    },
  ],
  [
    48131,
    {
      key: "MANUAL_CHARGE_PUMP_SPEED",
    },
  ],
  [
    48132,
    {
      key: "TEMPORARY_LUX",
    },
  ],
  [
    48133,
    {
      key: "PERIOD_POOL_2",
    },
  ],
  [
    48139,
    {
      key: "DM_STARTDIFF_ADD_WITH_SHUNT",
    },
  ],
  [
    48140,
    {
      key: "MAX_POOL_2_COMPR",
    },
  ],
  [
    48141,
    {
      key: "MAX_POOL_1_COMPR",
    },
  ],
  [
    48142,
    {
      key: "STEP_CONTROLLED_ADD_START_DIFF_DM",
    },
  ],
  [
    48144,
    {
      key: "HW_COMFORT_ADD_DURING_HEAT",
    },
  ],
  [
    48145,
    {
      key: "HW_COMFORT_MIXING_VALVE",
    },
  ],
  [
    48146,
    {
      key: "HW_COMFORT_MIXING_VALVE_AMP",
    },
  ],
  [
    48147,
    {
      key: "HW_COMFORT_MIXING_VALVE_WAIT",
    },
  ],
  [
    48148,
    {
      key: "HW_COMFORT_HOTWATER_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    48155,
    {
      key: "ETHERNET_IS_ALLOWED",
    },
  ],
  [
    48156,
    {
      key: "EXTERNAL_COOLING_ACCESSORY",
    },
  ],
  [
    48157,
    {
      key: "HW_COMFORT_ADD",
    },
  ],
  [
    48158,
    {
      key: "SAM_SUPPLY_AIR_CURVE_OUTDOOR_TEMP_T3",
      divideBy: 10,
    },
  ],
  [
    48159,
    {
      key: "SAM_SUPPLY_AIR_CURVE_OUTDOOR_TEMP_T2",
      divideBy: 10,
    },
  ],
  [
    48160,
    {
      key: "SAM_SUPPLY_AIR_CURVE_OUTDOOR_TEMP_T1",
      divideBy: 10,
    },
  ],
  [
    48161,
    {
      key: "SAM_SUPPLY_AIR_CURVE_SUPPLY_AIR_TEMP_AT_T3",
      divideBy: 10,
    },
  ],
  [
    48162,
    {
      key: "SAM_SUPPLY_AIR_CURVE_SUPPLY_AIR_TEMP_AT_T2",
      divideBy: 10,
    },
  ],
  [
    48163,
    {
      key: "SAM_SUPPLY_AIR_CURVE_SUPPLY_AIR_TEMP_AT_T1",
      divideBy: 10,
    },
  ],
  [
    48174,
    {
      key: "MIN_COOLING_SUPPLY_TEMP_S4",
      divideBy: 10,
    },
  ],
  [
    48175,
    {
      key: "MIN_COOLING_SUPPLY_TEMP_S3",
      divideBy: 10,
    },
  ],
  [
    48176,
    {
      key: "MIN_COOLING_SUPPLY_TEMP_S2",
      divideBy: 10,
    },
  ],
  [
    48177,
    {
      key: "MIN_COOLING_SUPPLY_TEMP_S1",
      divideBy: 10,
    },
  ],
  [
    48178,
    {
      key: "COOLING_SUPPLY_TEMP_AT_20_C_S4",
      divideBy: 10,
    },
  ],
  [
    48179,
    {
      key: "COOLING_SUPPLY_TEMP_AT_20_C_S3",
      divideBy: 10,
    },
  ],
  [
    48180,
    {
      key: "COOLING_SUPPLY_TEMP_AT_20_C_S2",
      divideBy: 10,
    },
  ],
  [
    48181,
    {
      key: "OWN_COOLING_CURVE_P3",
      divideBy: 10,
    },
  ],
  [
    48182,
    {
      key: "COOLING_SUPPLY_TEMP_AT_40_C_S4",
      divideBy: 10,
    },
  ],
  [
    48183,
    {
      key: "COOLING_SUPPLY_TEMP_AT_40_C_S3",
      divideBy: 10,
    },
  ],
  [
    48184,
    {
      key: "COOLING_SUPPLY_TEMP_AT_40_C_S2",
      divideBy: 10,
    },
  ],
  [
    48185,
    {
      key: "OWN_COOLING_CURVE_P5",
      divideBy: 10,
    },
  ],
  [
    48186,
    {
      key: "COOLING_USE_MIX_VALVE_S4",
    },
  ],
  [
    48187,
    {
      key: "COOLING_USE_MIX_VALVE_S3",
    },
  ],
  [
    48188,
    {
      key: "COOLING_USE_MIX_VALVE_S2",
    },
  ],
  [
    48189,
    {
      key: "COOLING_USE_MIX_VALVE_S1",
    },
  ],
  [
    48190,
    {
      key: "HEATDUMP_MIX_VALVE_DELAY",
    },
  ],
  [
    48191,
    {
      key: "HEATDUMP_MIX_VALVE_AMP",
    },
  ],
  [
    48192,
    {
      key: "COOLDUMP_MIX_VALVE_DELAY",
    },
  ],
  [
    48193,
    {
      key: "COOLDUMP_MIX_VALVE_AMP",
    },
  ],
  [
    48194,
    {
      key: "ACS_ACCESSORY",
    },
  ],
  [
    48195,
    {
      key: "ACS_HEAT_DUMP_24H_FUNCTION",
    },
  ],
  [
    48196,
    {
      key: "ACS_RUN_BRINEPUMP_IN_WAIT_MODE",
    },
  ],
  [
    48197,
    {
      key: "ACS_CLOSINGTIME_FOR_COOL_DUMP",
    },
  ],
  [
    48198,
    {
      key: "ACS_MAX_CPRS_IN_ACTIVE_COOLING",
    },
  ],
  [
    48199,
    {
      key: "ACS_MAX_BRINEPUMPS_IN_PASSIVE_COOLING",
    },
  ],
  [
    48200,
    {
      key: "SOLAR_FREEZE_PROTECTION",
    },
  ],
  [
    48201,
    {
      key: "SCA_ACCESSORY",
    },
  ],
  [
    48206,
    {
      key: "SILENT_MODE_STATUS",
    },
  ],
  [
    48207,
    {
      key: "PERIOD_COOL",
    },
  ],
  [
    48208,
    {
      key: "OPERATIONAL_MODE_COOL_PUMP",
    },
  ],
  [
    48214,
    {
      key: "COOLING_DELTA_TEMP_AT_20_C",
      divideBy: 10,
    },
  ],
  [
    48215,
    {
      key: "COOLING_DELTA_TEMP_AT_40_C",
      divideBy: 10,
    },
  ],
  [
    48228,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_S8",
    },
  ],
  [
    48229,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_S7",
    },
  ],
  [
    48230,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_S6",
    },
  ],
  [
    48231,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_S5",
    },
  ],
  [
    48232,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_S4",
    },
  ],
  [
    48233,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_S3",
    },
  ],
  [
    48234,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_S2",
    },
  ],
  [
    48235,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_S1",
    },
  ],
  [
    48257,
    {
      key: "SCHEDULED_SILENT_MODE",
    },
  ],
  [
    48258,
    {
      key: "SCHEDULED_SILENT_MODE",
    },
  ],
  [
    48264,
    {
      key: "BRINE_SHUNT_ACCESSORY",
    },
  ],
  [
    48265,
    {
      key: "BRINE_SHUNT_AMPLICATION",
    },
  ],
  [
    48266,
    {
      key: "BRINE_SHUNT_WAIT_TIME",
    },
  ],
  [
    48267,
    {
      key: "BRINE_SHUNT_MAX_BRINE_TEMP",
      divideBy: 10,
    },
  ],
  [
    48272,
    {
      key: "HP_TEST_CUSTOM_COMPR_FREQUENCY",
    },
  ],
  [
    48273,
    {
      key: "HP_TEST_CUSTOM_PUMP_SPEED",
    },
  ],
  [
    48274,
    {
      key: "HOT_WATER_STEPDIFF_COMPRESSOR",
    },
  ],
  [
    48275,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    48278,
    {
      key: "DM_START_EXT_ADD",
    },
  ],
  [
    48279,
    {
      key: "POSITION_OF_ADDITION",
    },
  ],
  [
    48280,
    {
      key: "INTERNAL_HW_ADD_IN_TANK",
    },
  ],
  [
    48281,
    {
      key: "CHARGE_METHOD_HW",
    },
  ],
  [
    48282,
    {
      key: "SG_READY_HEATING",
    },
  ],
  [
    48283,
    {
      key: "SG_READY_COOLING",
    },
  ],
  [
    48284,
    {
      key: "SG_READY_HOT_WATER",
    },
  ],
  [
    48285,
    {
      key: "SG_READY_POOL",
    },
  ],
  [
    48286,
    {
      key: "POOL_2_CPR_PERCENTAGE",
    },
  ],
  [
    48287,
    {
      key: "POOL_1_CPR_PERCENTAGE",
    },
  ],
  [
    48288,
    {
      key: "COOL_CPR_PERCENTAGE",
    },
  ],
  [
    48366,
    {
      key: "AUX_6",
      divideBy: 0,
    },
  ],
  [
    48367,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_8",
    },
  ],
  [
    48368,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_7",
    },
  ],
  [
    48369,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_6",
    },
  ],
  [
    48370,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_5",
    },
  ],
  [
    48371,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_4",
    },
  ],
  [
    48372,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_3",
    },
  ],
  [
    48373,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_2",
    },
  ],
  [
    48374,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_1",
    },
  ],
  [
    48375,
    {
      key: "OP_MODE_CIRC_PUMP_HEAT_SLAVE_8",
    },
  ],
  [
    48376,
    {
      key: "OP_MODE_CIRC_PUMP_HEAT_SLAVE_7",
    },
  ],
  [
    48377,
    {
      key: "OP_MODE_CIRC_PUMP_HEAT_SLAVE_6",
    },
  ],
  [
    48378,
    {
      key: "OP_MODE_CIRC_PUMP_HEAT_SLAVE_5",
    },
  ],
  [
    48379,
    {
      key: "OP_MODE_CIRC_PUMP_HEAT_SLAVE_4",
    },
  ],
  [
    48380,
    {
      key: "OP_MODE_CIRC_PUMP_HEAT_SLAVE_3",
    },
  ],
  [
    48381,
    {
      key: "OP_MODE_CIRC_PUMP_HEAT_SLAVE_2",
    },
  ],
  [
    48382,
    {
      key: "OP_MODE_CIRC_PUMP_HEAT_SLAVE_1",
    },
  ],
  [
    48383,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_8",
    },
  ],
  [
    48384,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_7",
    },
  ],
  [
    48385,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_6",
    },
  ],
  [
    48386,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_5",
    },
  ],
  [
    48387,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_4",
    },
  ],
  [
    48388,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_3",
    },
  ],
  [
    48389,
    {
      key: "SPEED_CIRC_PUMP_HEAT_SLAVE_2",
    },
  ],
  [
    48390,
    {
      key: "SPEED_CIRC_PUMP_HW_SLAVE_1",
    },
  ],
  [
    48391,
    {
      key: "OP_MODE_CIRC_PUMP_HW_SLAVE_8",
    },
  ],
  [
    48392,
    {
      key: "OP_MODE_CIRC_PUMP_HW_SLAVE_7",
    },
  ],
  [
    48393,
    {
      key: "OP_MODE_CIRC_PUMP_HW_SLAVE_6",
    },
  ],
  [
    48394,
    {
      key: "OP_MODE_CIRC_PUMP_HW_SLAVE_5",
    },
  ],
  [
    48395,
    {
      key: "OP_MODE_CIRC_PUMP_HW_SLAVE_4",
    },
  ],
  [
    48396,
    {
      key: "OP_MODE_CIRC_PUMP_HW_SLAVE_3",
    },
  ],
  [
    48397,
    {
      key: "OP_MODE_CIRC_PUMP_HW_SLAVE_2",
    },
  ],
  [
    48398,
    {
      key: "OP_MODE_CIRC_PUMP_HW_SLAVE_1",
    },
  ],
  [
    48399,
    {
      key: "SPEED_CIRC_PUMP_POOL_SLAVE_8",
    },
  ],
  [
    48400,
    {
      key: "SPEED_CIRC_PUMP_POOL_SLAVE_7",
    },
  ],
  [
    48401,
    {
      key: "SPEED_CIRC_PUMP_POOL_SLAVE_6",
    },
  ],
  [
    48402,
    {
      key: "SPEED_CIRC_PUMP_POOL_SLAVE_5",
    },
  ],
  [
    48403,
    {
      key: "SPEED_CIRC_PUMP_POOL_SLAVE_4",
    },
  ],
  [
    48404,
    {
      key: "SPEED_CIRC_PUMP_POOL_SLAVE_3",
    },
  ],
  [
    48405,
    {
      key: "SPEED_CIRC_PUMP_POOL_SLAVE_2",
    },
  ],
  [
    48406,
    {
      key: "SPEED_CIRC_PUMP_POOL_SLAVE_1",
    },
  ],
  [
    48407,
    {
      key: "OP_MODE_CIRC_PUMP_POOL_SLAVE_8",
    },
  ],
  [
    48408,
    {
      key: "OP_MODE_CIRC_PUMP_POOL_SLAVE_7",
    },
  ],
  [
    48409,
    {
      key: "OP_MODE_CIRC_PUMP_POOL_SLAVE_6",
    },
  ],
  [
    48410,
    {
      key: "OP_MODE_CIRC_PUMP_POOL_SLAVE_5",
    },
  ],
  [
    48411,
    {
      key: "OP_MODE_CIRC_PUMP_POOL_SLAVE_4",
    },
  ],
  [
    48412,
    {
      key: "OP_MODE_CIRC_PUMP_POOL_SLAVE_3",
    },
  ],
  [
    48413,
    {
      key: "OP_MODE_CIRC_PUMP_POOL_SLAVE_2",
    },
  ],
  [
    48414,
    {
      key: "OP_MODE_CIRC_PUMP_POOL_SLAVE_1",
    },
  ],
  [
    48415,
    {
      key: "SPEED_CIRC_PUMP_COOLING_SLAVE_8",
    },
  ],
  [
    48416,
    {
      key: "SPEED_CIRC_PUMP_COOLING_SLAVE_7",
    },
  ],
  [
    48417,
    {
      key: "SPEED_CIRC_PUMP_COOLING_SLAVE_6",
    },
  ],
  [
    48418,
    {
      key: "SPEED_CIRC_PUMP_COOLING_SLAVE_5",
    },
  ],
  [
    48419,
    {
      key: "SPEED_CIRC_PUMP_COOLING_SLAVE_4",
    },
  ],
  [
    48420,
    {
      key: "SPEED_CIRC_PUMP_COOLING_SLAVE_3",
    },
  ],
  [
    48421,
    {
      key: "SPEED_CIRC_PUMP_COOLING_SLAVE_2",
    },
  ],
  [
    48422,
    {
      key: "SPEED_CIRC_PUMP_COOLING_SLAVE_1",
    },
  ],
  [
    48424,
    {
      key: "OP_MODE_CIRC_PUMP_COOLING_SLAVE_8",
    },
  ],
  [
    48425,
    {
      key: "OP_MODE_CIRC_PUMP_COOLING_SLAVE_7",
    },
  ],
  [
    48426,
    {
      key: "OP_MODE_CIRC_PUMP_COOLING_SLAVE_6",
    },
  ],
  [
    48427,
    {
      key: "OP_MODE_CIRC_PUMP_COOLING_SLAVE_5",
    },
  ],
  [
    48428,
    {
      key: "OP_MODE_CIRC_PUMP_COOLING_SLAVE_4",
    },
  ],
  [
    48429,
    {
      key: "OP_MODE_CIRC_PUMP_COOLING_SLAVE_3",
    },
  ],
  [
    48430,
    {
      key: "OP_MODE_CIRC_PUMP_COOLING_SLAVE_2",
    },
  ],
  [
    48431,
    {
      key: "OP_MODE_CIRC_PUMP_COOLING_SLAVE_1",
    },
  ],
  [
    48433,
    {
      key: "SPEED_CIRC_PUMP_WAITING_SLAVE_8",
    },
  ],
  [
    48434,
    {
      key: "SPEED_CIRC_PUMP_WAITING_SLAVE_7",
    },
  ],
  [
    48435,
    {
      key: "SPEED_CIRC_PUMP_WAITING_SLAVE_6",
    },
  ],
  [
    48436,
    {
      key: "SPEED_CIRC_PUMP_WAITING_SLAVE_5",
    },
  ],
  [
    48437,
    {
      key: "SPEED_CIRC_PUMP_WAITING_SLAVE_4",
    },
  ],
  [
    48438,
    {
      key: "SPEED_CIRC_PUMP_WAITING_SLAVE_3",
    },
  ],
  [
    48439,
    {
      key: "SPEED_CIRC_PUMP_WAITING_SLAVE_2",
    },
  ],
  [
    48440,
    {
      key: "SPEED_CIRC_PUMP_WAITING_SLAVE_1",
    },
  ],
  [
    48442,
    {
      key: "SMART_PRICE_ADAPTION_ACTIVATED",
    },
  ],
  [
    48443,
    {
      key: "SMART_PRICE_ADAPTION_HEATING_ACTIVATED",
    },
  ],
  [
    48444,
    {
      key: "SMART_PRICE_ADAPTION_HEATING_AMPLITUDE",
    },
  ],
  [
    48445,
    {
      key: "SMART_PRICE_ADAPTION_HOT_WATER_ACTIVATED",
    },
  ],
  [
    48446,
    {
      key: "SMART_PRICE_ADAPTION_POOL_ACTIVATED",
    },
  ],
  [
    48447,
    {
      key: "SMART_PRICE_ADAPTION_POOL_AMPLITUDE",
    },
  ],
  [
    48448,
    {
      key: "SMART_PRICE_ADAPTION_COOLING_ACTIVATED",
    },
  ],
  [
    48449,
    {
      key: "SMART_PRICE_ADAPTION_COOLING_AMPLITUDE",
    },
  ],
  [
    48450,
    {
      key: "SMART_PRICE_ADAPTION_AREA",
    },
  ],
  [
    48452,
    {
      key: "AUTO_HEAT_MEDIUM_PUMP_SPEED_HW",
    },
  ],
  [
    48453,
    {
      key: "AUTO_HEAT_MEDIUM_PUMP_SPEED_HEAT",
    },
  ],
  [
    48454,
    {
      key: "AUTO_HEAT_MEDIUM_PUMP_SPEED_POOL",
    },
  ],
  [
    48455,
    {
      key: "AUTO_HEAT_MEDIUM_PUMP_SPEED_COOL",
    },
  ],
  [
    48456,
    {
      key: "OPERATIONAL_MODE_HEAT_MEDIUM_PUMP_COOLING",
    },
  ],
  [
    48457,
    {
      key: "INT_SHUNT_CONTROLLED_ADD",
    },
  ],
  [
    48458,
    {
      key: "MAX_SPEED_CIRC_PUMP_HEAT",
    },
  ],
  [
    48459,
    {
      key: "SPEED_BRINE_PUMP_PASSIVE_COOLING",
    },
  ],
  [
    48460,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED_EB108",
    },
  ],
  [
    48461,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED_EB107",
    },
  ],
  [
    48462,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED_EB106",
    },
  ],
  [
    48463,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED_EB105",
    },
  ],
  [
    48464,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED_EB104",
    },
  ],
  [
    48465,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED_EB103",
    },
  ],
  [
    48466,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED_EB102",
    },
  ],
  [
    48467,
    {
      key: "MAX_CHARGE_PUMP_REG_SPEED_EB101",
    },
  ],
  [
    48468,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_IN_COOLING_MODE_S8",
    },
  ],
  [
    48469,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_IN_COOLING_MODE_S7",
    },
  ],
  [
    48470,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_IN_COOLING_MODE_S6",
    },
  ],
  [
    48471,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_IN_COOLING_MODE_S5",
    },
  ],
  [
    48472,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_IN_COOLING_MODE_S4",
    },
  ],
  [
    48473,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_IN_COOLING_MODE_S3",
    },
  ],
  [
    48474,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_IN_COOLING_MODE_S2",
    },
  ],
  [
    48475,
    {
      key: "OPERATIONAL_MODE_CHARGE_PUMP_IN_COOLING_MODE_S1",
    },
  ],
  [
    48486,
    {
      key: "PRIORITIZE_ADDITION_AXC40",
    },
  ],
  [
    48487,
    {
      key: "SPEED_CIRCULATION_PUMP_ACTIVE_COOLING_EP14",
    },
  ],
  [
    48488,
    {
      key: "HEAT_CURVE_S6",
    },
  ],
  [
    48489,
    {
      key: "HEAT_CURVE_S5",
    },
  ],
  [
    48490,
    {
      key: "OFFSET_S8",
    },
  ],
  [
    48491,
    {
      key: "HEAT_OFFSET_S8",
    },
  ],
  [
    48492,
    {
      key: "HEAT_OFFSET_S7",
    },
  ],
  [
    48493,
    {
      key: "HEAT_OFFSET_S6",
    },
  ],
  [
    48494,
    {
      key: "HEAT_OFFSET_S5",
    },
  ],
  [
    48495,
    {
      key: "MIN_SUPPLY_SYSTEM_8",
      divideBy: 10,
    },
  ],
  [
    48496,
    {
      key: "MIN_SUPPLY_SYSTEM_7",
      divideBy: 10,
    },
  ],
  [
    48497,
    {
      key: "MIN_SUPPLY_SYSTEM_6",
      divideBy: 10,
    },
  ],
  [
    48498,
    {
      key: "MIN_SUPPLY_SYSTEM_5",
      divideBy: 10,
    },
  ],
  [
    48499,
    {
      key: "MAX_SUPPLY_SYSTEM_8",
      divideBy: 10,
    },
  ],
  [
    48500,
    {
      key: "MAX_SUPPLY_SYSTEM_7",
      divideBy: 10,
    },
  ],
  [
    48501,
    {
      key: "MAX_SUPPLY_SYSTEM_6",
      divideBy: 10,
    },
  ],
  [
    48502,
    {
      key: "MAX_SUPPLY_SYSTEM_5",
      divideBy: 10,
    },
  ],
  [
    48503,
    {
      key: "EXTERNAL_ADJUSTMENT_S8",
    },
  ],
  [
    48504,
    {
      key: "EXTERNAL_ADJUSTMENT_S7",
    },
  ],
  [
    48505,
    {
      key: "EXTERNAL_ADJUSTMENT_S6",
    },
  ],
  [
    48506,
    {
      key: "EXTERNAL_ADJUSTMENT_S5",
    },
  ],
  [
    48507,
    {
      key: "EXTERNAL_ADJUSTMENT_WITH_ROOM_SENSOR_S8",
      divideBy: 10,
    },
  ],
  [
    48508,
    {
      key: "EXTERNAL_ADJUSTMENT_WITH_ROOM_SENSOR_S7",
      divideBy: 10,
    },
  ],
  [
    48509,
    {
      key: "EXTERNAL_ADJUSTMENT_WITH_ROOM_SENSOR_S6",
      divideBy: 10,
    },
  ],
  [
    48510,
    {
      key: "EXTERNAL_ADJUSTMENT_WITH_ROOM_SENSOR_S5",
      divideBy: 10,
    },
  ],
  [
    48563,
    {
      key: "HP_TEST_CUSTOM_BRINE_PUMP_SPEED",
    },
  ],
  [
    48564,
    {
      key: "STATE_THE_DAMPERS_ISHALL_BE_DURING_NIGHT_COOLING_ERS10",
    },
  ],
  [
    48565,
    {
      key: "SMART_CONTROL_ACTIVATED",
    },
  ],
  [
    48566,
    {
      key: "SMART_PRICE_ADAPTION_HOT_WATER_AMPLITUDE",
    },
  ],
  [
    48567,
    {
      key: "INITIATE_INVERTER",
    },
  ],
  [
    48568,
    {
      key: "FORCE_INVERTER_INIT",
    },
  ],
  [
    48569,
    {
      key: "CLIMATE_SYSTEM_5_ACCESSORY",
    },
  ],
  [
    48570,
    {
      key: "CLIMATE_SYSTEM_6_ACCESSORY",
    },
  ],
  [
    48571,
    {
      key: "CLIMATE_SYSTEM_7_ACCESSORY",
    },
  ],
  [
    48572,
    {
      key: "CLIMATE_SYSTEM_8_ACCESSORY",
    },
  ],
  [
    48573,
    {
      key: "CLIMATE_SYSTEM_8_MIXING_VALVE_AMP",
    },
  ],
  [
    48574,
    {
      key: "CLIMATE_SYSTEM_7_MIXING_VALVE_AMP",
    },
  ],
  [
    48575,
    {
      key: "CLIMATE_SYSTEM_6_MIXING_VALVE_AMP",
    },
  ],
  [
    48576,
    {
      key: "CLIMATE_SYSTEM_5_MIXING_VALVE_AMP",
    },
  ],
  [
    48577,
    {
      key: "CLIMATE_SYSTEM_8_SHUNT_WAIT",
    },
  ],
  [
    48578,
    {
      key: "CLIMATE_SYSTEM_7_SHUNT_WAIT",
    },
  ],
  [
    48579,
    {
      key: "CLIMATE_SYSTEM_6_SHUNT_WAIT",
    },
  ],
  [
    48580,
    {
      key: "CLIMATE_SYSTEM_5_SHUNT_WAIT",
    },
  ],
  [
    48581,
    {
      key: "MIN_COOLING_SUPPLY_TEMP_S8",
      divideBy: 10,
    },
  ],
  [
    48582,
    {
      key: "MIN_COOLING_SUPPLY_TEMP_S7",
      divideBy: 10,
    },
  ],
  [
    48583,
    {
      key: "MIN_COOLING_SUPPLY_TEMP_S6",
      divideBy: 10,
    },
  ],
  [
    48584,
    {
      key: "MIN_COOLING_SUPPLY_TEMP_S5",
      divideBy: 10,
    },
  ],
  [
    48585,
    {
      key: "COOLING_SUPPLY_TEMP_AT_20_C_S8",
      divideBy: 10,
    },
  ],
  [
    48586,
    {
      key: "COOLING_SUPPLY_TEMP_AT_20_C_S7",
      divideBy: 10,
    },
  ],
  [
    48587,
    {
      key: "COOLING_SUPPLY_TEMP_AT_20_C_S6",
      divideBy: 10,
    },
  ],
  [
    48588,
    {
      key: "COOLING_SUPPLY_TEMP_AT_20_C_S5",
      divideBy: 10,
    },
  ],
  [
    48589,
    {
      key: "COOLING_SUPPLY_TEMP_AT_40_C_S8",
      divideBy: 10,
    },
  ],
  [
    48590,
    {
      key: "COOLING_SUPPLY_TEMP_AT_40_C_S7",
      divideBy: 10,
    },
  ],
  [
    48591,
    {
      key: "COOLING_SUPPLY_TEMP_AT_40_C_S6",
      divideBy: 10,
    },
  ],
  [
    48592,
    {
      key: "COOLING_SUPPLY_TEMP_AT_40_C_S5",
      divideBy: 10,
    },
  ],
  [
    48593,
    {
      key: "COOLING_USE_MIX_VALVE_S8",
    },
  ],
  [
    48594,
    {
      key: "COOLING_USE_MIX_VALVE_S7",
    },
  ],
  [
    48595,
    {
      key: "COOLING_USE_MIX_VALVE_S6",
    },
  ],
  [
    48596,
    {
      key: "COOLING_USE_MIX_VALVE_S5",
    },
  ],
  [
    48597,
    {
      key: "HEATING_USE_MIX_VALVE_S8",
    },
  ],
  [
    48598,
    {
      key: "HEATING_USE_MIX_VALVE_S7",
    },
  ],
  [
    48599,
    {
      key: "HEATING_USE_MIX_VALVE_S6",
    },
  ],
  [
    48600,
    {
      key: "HEATING_USE_MIX_VALVE_S5",
    },
  ],
  [
    48601,
    {
      key: "HEATING_USE_MIX_VALVE_S4",
    },
  ],
  [
    48602,
    {
      key: "HEATING_USE_MIX_VALVE_S3",
    },
  ],
  [
    48603,
    {
      key: "HEATING_USE_MIX_VALVE_S2",
    },
  ],
  [
    48604,
    {
      key: "HEATING_USE_MIX_VALVE_S1",
    },
  ],
  [
    48605,
    {
      key: "SOLAR_41_ACCESSORY",
    },
  ],
  [
    48606,
    {
      key: "SOLAR_40_42_ACCESSORY",
    },
  ],
  [
    48607,
    {
      key: "ERS_1_ACCESSORY",
    },
  ],
  [
    48629,
    {
      key: "OWN_CURVE_SUPPLY_TEMP_P7",
      divideBy: 10,
    },
  ],
  [
    48630,
    {
      key: "OWN_CURVE_SUPPLY_TEMP_P6",
      divideBy: 10,
    },
  ],
  [
    48631,
    {
      key: "OWN_CURVE_SUPPLY_TEMP_P5",
      divideBy: 10,
    },
  ],
  [
    48632,
    {
      key: "OWN_CURVE_SUPPLY_TEMP_P4",
      divideBy: 10,
    },
  ],
  [
    48633,
    {
      key: "OWN_CURVE_SUPPLY_TEMP_P3",
      divideBy: 10,
    },
  ],
  [
    48634,
    {
      key: "OWN_CURVE_SUPPLY_TEMP_P2",
      divideBy: 10,
    },
  ],
  [
    48635,
    {
      key: "OWN_CURVE_SUPPLY_TEMP_P1",
      divideBy: 10,
    },
  ],
  [
    48637,
    {
      key: "AHPS_DOCKING_ACCESSORY",
    },
  ],
  [
    48638,
    {
      key: "AHPS_DOCKING_SOLAR_HEATING",
    },
  ],
  [
    48639,
    {
      key: "AHPS_DOCKING_PRIORITIZED_ADD",
    },
  ],
  [
    48640,
    {
      key: "AHPS_DOCKING_EXT_ADDITION",
    },
  ],
  [
    48641,
    {
      key: "AHPS_DOCKING_EXT_HOT_WATER",
    },
  ],
  [
    48642,
    {
      key: "AHPS_PRIO_ADD_START_DELTA_T_GP4",
    },
  ],
  [
    48643,
    {
      key: "AHPS_PRIO_ADD_STOP_DELTA_T_GP4",
    },
  ],
  [
    48644,
    {
      key: "AHPS_TANK_MAX_TEMP",
    },
  ],
  [
    48645,
    {
      key: "AHPS_PRIO_ADD_COOLING_FUNC",
    },
  ],
  [
    48646,
    {
      key: "AHPS_PRIO_ADD_COOLING_START_TEMP",
    },
  ],
  [
    48647,
    {
      key: "EB103_104_GP12",
    },
  ],
  [
    48648,
    {
      key: "EB105_106_GP12",
    },
  ],
  [
    48649,
    {
      key: "EB107_108_GP12",
    },
  ],
  [
    48659,
    {
      key: "CUT_OFF_FREQUENCY_ACTIVATED_2",
    },
  ],
  [
    48660,
    {
      key: "CUT_OFF_FREQUENCY_ACTIVATED_1",
    },
  ],
  [
    48661,
    {
      key: "CUT_OFF_FREQUENCY_START_2",
    },
  ],
  [
    48662,
    {
      key: "CUT_OFF_FREQUENCY_START_1",
    },
  ],
  [
    48663,
    {
      key: "CUT_OFF_FREQUENCY_STOP_2",
    },
  ],
  [
    48664,
    {
      key: "CUT_OFF_FREQUENCY_STOP_1",
    },
  ],
  [
    48671,
    {
      key: "ALLOW_ENERGY_RE_USE",
    },
  ],
  [
    48672,
    {
      key: "MAX_DIFF_ADD_STEP",
      divideBy: 10,
    },
  ],
  [
    48674,
    {
      key: "USE_ROOM_SENSOR_SUPPLY_AIR",
    },
  ],
  [
    48675,
    {
      key: "USE_ROOM_SENSOR_S8",
    },
  ],
  [
    48676,
    {
      key: "USE_ROOM_SENSOR_S7",
    },
  ],
  [
    48677,
    {
      key: "USE_ROOM_SENSOR_S6",
    },
  ],
  [
    48678,
    {
      key: "USE_ROOM_SENSOR_S5",
    },
  ],
  [
    48679,
    {
      key: "SET_VALUE",
      divideBy: 10,
    },
  ],
  [
    48680,
    {
      key: "SET_VALUE_S8",
      divideBy: 10,
    },
  ],
  [
    48681,
    {
      key: "SET_VALUE_S7",
      divideBy: 10,
    },
  ],
  [
    48682,
    {
      key: "SET_VALUE_S6",
      divideBy: 10,
    },
  ],
  [
    48683,
    {
      key: "SET_VALUE_S5",
      divideBy: 10,
    },
  ],
  [
    48684,
    {
      key: "ROOM_SENSOR_FACTOR_SUPPLY_AIR",
    },
  ],
  [
    48685,
    {
      key: "ROOM_SENSOR_FACTOR_S8",
    },
  ],
  [
    48686,
    {
      key: "ROOM_SENSOR_FACTOR_S7",
    },
  ],
  [
    48687,
    {
      key: "ROOM_SENSOR_FACTOR_S6",
    },
  ],
  [
    48688,
    {
      key: "ROOM_SENSOR_FACTOR_S5",
    },
  ],
  [
    48689,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_SUPPLY_AIR",
    },
  ],
  [
    48690,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_S8",
    },
  ],
  [
    48691,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_S7",
    },
  ],
  [
    48692,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_S6",
    },
  ],
  [
    48693,
    {
      key: "ROOM_SENSOR_INTEGRATION_TIME_S5",
    },
  ],
  [
    48724,
    {
      key: "COOL_CURVE_S8",
    },
  ],
  [
    48725,
    {
      key: "COOL_CURVE_S7",
    },
  ],
  [
    48726,
    {
      key: "COOL_CURVE_S6",
    },
  ],
  [
    48727,
    {
      key: "COOL_CURVE_S5",
    },
  ],
  [
    48728,
    {
      key: "COOL_CURVE_S4",
    },
  ],
  [
    48729,
    {
      key: "COOL_CURVE_S3",
    },
  ],
  [
    48730,
    {
      key: "COOL_CURVE_S2",
    },
  ],
  [
    48731,
    {
      key: "COOL_CURVE_S1",
    },
  ],
  [
    48732,
    {
      key: "COOL_OFFSET_S8",
    },
  ],
  [
    48733,
    {
      key: "COOL_OFFSET_S7",
    },
  ],
  [
    48734,
    {
      key: "COOL_OFFSET_S6",
    },
  ],
  [
    48735,
    {
      key: "COOL_OFFSET_S5",
    },
  ],
  [
    48736,
    {
      key: "COOL_OFFSET_S4",
    },
  ],
  [
    48737,
    {
      key: "COOL_OFFSET_S3",
    },
  ],
  [
    48738,
    {
      key: "COOL_OFFSET_S2",
    },
  ],
  [
    48739,
    {
      key: "COOL_OFFSET_S1",
    },
  ],
  [
    48740,
    {
      key: "OWN_COOLING_CURVE_P4",
      divideBy: 10,
    },
  ],
  [
    48741,
    {
      key: "OWN_COOLING_CURVE_P2",
      divideBy: 10,
    },
  ],
  [
    48742,
    {
      key: "OWN_COOLING_CURVE_P1",
      divideBy: 10,
    },
  ],
  [
    48743,
    {
      key: "HOT_WATER_HIGH_POWER_MODE",
    },
  ],
  [
    48745,
    {
      key: "COUNTRY",
      divideBy: 0,
    },
  ],
  [
    48755,
    {
      key: "TRANSFORMER_RATIO",
    },
  ],
  [
    48778,
    {
      key: "ROOM_SENSOR_COOL_SETPOINT_S8",
      divideBy: 10,
    },
  ],
  [
    48779,
    {
      key: "ROOM_SENSOR_COOL_SETPOINT_S7",
      divideBy: 10,
    },
  ],
  [
    48780,
    {
      key: "ROOM_SENSOR_COOL_SETPOINT_S6",
      divideBy: 10,
    },
  ],
  [
    48781,
    {
      key: "ROOM_SENSOR_COOL_SETPOINT_S5",
      divideBy: 10,
    },
  ],
  [
    48782,
    {
      key: "ROOM_SENSOR_COOL_SETPOINT_S4",
      divideBy: 10,
    },
  ],
  [
    48783,
    {
      key: "ROOM_SENSOR_COOL_SETPOINT_S3",
      divideBy: 10,
    },
  ],
  [
    48784,
    {
      key: "ROOM_SENSOR_COOL_SETPOINT_S2",
      divideBy: 10,
    },
  ],
  [
    48785,
    {
      key: "ROOM_SENSOR_COOL_SETPOINT_S1",
      divideBy: 10,
    },
  ],
  [
    48786,
    {
      key: "ROOM_SENSOR_COOL_FACTOR_S8",
    },
  ],
  [
    48787,
    {
      key: "ROOM_SENSOR_COOL_FACTOR_S7",
    },
  ],
  [
    48788,
    {
      key: "ROOM_SENSOR_COOL_FACTOR_S6",
    },
  ],
  [
    48789,
    {
      key: "ROOM_SENSOR_COOL_FACTOR_S5",
    },
  ],
  [
    48790,
    {
      key: "ROOM_SENSOR_COOL_FACTOR_S4",
    },
  ],
  [
    48791,
    {
      key: "ROOM_SENSOR_COOL_FACTOR_S3",
    },
  ],
  [
    48792,
    {
      key: "ROOM_SENSOR_COOL_FACTOR_S2",
    },
  ],
  [
    48793,
    {
      key: "ROOM_SENSOR_COOL_FACTOR_S1",
    },
  ],
  [
    48794,
    {
      key: "RH_SET_VALUE",
    },
  ],
  [
    48804,
    {
      key: "HP_TEST_CUSTOM_PUMP_SPEED_EP15",
    },
  ],
  [
    48805,
    {
      key: "HP_TEST_CUSTOM_BRINE_PUMP_SPEED_EP15",
    },
  ],
  [
    48808,
    {
      key: "HTS_ACCESSORY_1",
    },
  ],
  [
    48809,
    {
      key: "PREVENT_HUMIDITY",
    },
  ],
  [
    48810,
    {
      key: "PREVENT_HUMIDITY_S8",
    },
  ],
  [
    48811,
    {
      key: "PREVENT_HUMIDITY_S7",
    },
  ],
  [
    48812,
    {
      key: "PREVENT_HUMIDITY_S6",
    },
  ],
  [
    48813,
    {
      key: "PREVENT_HUMIDITY_S5",
    },
  ],
  [
    48814,
    {
      key: "PREVENT_HUMIDITY_S4",
    },
  ],
  [
    48815,
    {
      key: "PREVENT_HUMIDITY_S3",
    },
  ],
  [
    48816,
    {
      key: "PREVENT_HUMIDITY_S2",
    },
  ],
  [
    48817,
    {
      key: "PREVENT_HUMIDITY_S1",
    },
  ],
  [
    48818,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM",
    },
  ],
  [
    48819,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_HEATING_S8",
    },
  ],
  [
    48820,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_HEATING_S7",
    },
  ],
  [
    48821,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_HEATING_S6",
    },
  ],
  [
    48822,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_HEATING_S5",
    },
  ],
  [
    48823,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_HEATING_S4",
    },
  ],
  [
    48824,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_HEATING_S3",
    },
  ],
  [
    48825,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_HEATING_S2",
    },
  ],
  [
    48826,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_HEATING_S1",
    },
  ],
  [
    48827,
    {
      key: "OWN_CURVE_SUPPLY_TEMP_P8",
      divideBy: 10,
    },
  ],
  [
    48828,
    {
      key: "OPT",
    },
  ],
  [
    48829,
    {
      key: "OPT_DM_STARTDIFF",
    },
  ],
  [
    48849,
    {
      key: "SPEED_BRINE_PUMP_ACTIVE_COOLING",
    },
  ],
  [
    48850,
    {
      key: "DELTA_BRINE_PUMP_ACTIVE_COOLING",
      divideBy: 10,
    },
  ],
  [
    48851,
    {
      key: "WAITING_SPEED_BRINE_PUMP_COOLING",
    },
  ],
  [
    48852,
    {
      key: "MODBUS40_WORD_SWAP",
    },
  ],
  [
    48853,
    {
      key: "ERS_1_EXHAUST_FAN_SPEED_4",
    },
  ],
  [
    48854,
    {
      key: "ERS_1_EXHAUST_FAN_SPEED_3",
    },
  ],
  [
    48855,
    {
      key: "ERS_1_EXHAUST_FAN_SPEED_2",
    },
  ],
  [
    48856,
    {
      key: "ERS_1_EXHAUST_FAN_SPEED_1",
    },
  ],
  [
    48857,
    {
      key: "ERS_1_EXHAUST_FAN_SPEED_NORMAL",
    },
  ],
  [
    48858,
    {
      key: "ACS_THERMOSTAT_ACCESSORY",
    },
  ],
  [
    48859,
    {
      key: "FILTER_TIME_BT64",
    },
  ],
  [
    48860,
    {
      key: "ACS_THERM_HYST_BETWEEN_CPR",
      divideBy: 10,
    },
  ],
  [
    48861,
    {
      key: "ACS_THERM_START_TEMP",
      divideBy: 10,
    },
  ],
  [
    48862,
    {
      key: "TEMP_SHIFT_TO_BOREHOLE",
      divideBy: 10,
    },
  ],
  [
    48889,
    {
      key: "MODBUS40_DISABLE_LOG_SET",
    },
  ],
  [
    48890,
    {
      key: "OUTDOOR_AIR_FAN_SPEED_AZ1",
    },
  ],
  [
    48891,
    {
      key: "SETTING_UP_VENTILATION",
    },
  ],
  [
    48892,
    {
      key: "SETTING_UP_VENTILATION_OA_MIXING",
    },
  ],
  [
    48893,
    {
      key: "F135_HEAT_PUMP",
    },
  ],
  [
    48894,
    {
      key: "F135_PUMP_SPEED",
    },
  ],
  [
    48895,
    {
      key: "F135_HW_COOL",
    },
  ],
  [
    48896,
    {
      key: "ERS_1_SUPPLY_FAN_SPEED_4",
    },
  ],
  [
    48897,
    {
      key: "ERS_1_SUPPLY_FAN_SPEED_3",
    },
  ],
  [
    48898,
    {
      key: "ERS_1_SUPPLY_FAN_SPEED_2",
    },
  ],
  [
    48899,
    {
      key: "ERS_1_SUPPLY_FAN_SPEED_1",
    },
  ],
  [
    48900,
    {
      key: "ERS_1_SUPPLY_FAN_SPEED_NORMAL",
    },
  ],
  [
    48901,
    {
      key: "EXTERNAL_ERS_1_ACCESSORY_MIN_EXHAUST_TEMP",
      divideBy: 10,
    },
  ],
  [
    48902,
    {
      key: "EXTERNAL_ERS_1_ACCESSORY_BYPASS_TEMP",
      divideBy: 10,
    },
  ],
  [
    48903,
    {
      key: "EXTERNAL_FTX_ACCESSORY_MIRROR_BUILD",
    },
  ],
  [
    48904,
    {
      key: "POOL_PUMP_TYPE",
    },
  ],
  [
    48905,
    {
      key: "EXTERNAL_COOLING_ACCESSORY_PUMP_TYPE",
    },
  ],
  [
    48907,
    {
      key: "TYPE_OF_AHPS_EXT_ADD",
    },
  ],
  [
    48908,
    {
      key: "ENERGY_METER_FACTOR_X23",
    },
  ],
  [
    48909,
    {
      key: "ENERGY_METER_FACTOR_X22",
    },
  ],
  [
    48910,
    {
      key: "FLOW_SENSOR_ENERGY_METER_X23",
    },
  ],
  [
    48911,
    {
      key: "FLOW_SENSOR_ENERGY_METER_X22",
    },
  ],
  [
    48914,
    {
      key: "MAX_INT_ADD_POWER_SG_READY",
      divideBy: 10,
    },
  ],
  [
    48915,
    {
      key: "REAL_AIR_FLOW",
    },
  ],
  [
    48918,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_COOLING_S8",
    },
  ],
  [
    48919,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_COOLING_S7",
    },
  ],
  [
    48920,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_COOLING_S6",
    },
  ],
  [
    48921,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_COOLING_S5",
    },
  ],
  [
    48922,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_COOLING_S4",
    },
  ],
  [
    48923,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_COOLING_S3",
    },
  ],
  [
    48924,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_COOLING_S2",
    },
  ],
  [
    48925,
    {
      key: "LIMIT_HUMIDITY_IN_ROOM_COOLING_S1",
    },
  ],
  [
    48926,
    {
      key: "HUMIDITY_FACTOR_S1",
    },
  ],
  [
    48927,
    {
      key: "HUMIDITY_COOL_FACTOR_S1",
    },
  ],
  [
    48928,
    {
      key: "OPT_HYSTERESES",
    },
  ],
  [
    48929,
    {
      key: "OPT_DM_START",
    },
  ],
  [
    48930,
    {
      key: "ACTIVATED_EME10",
    },
  ],
  [
    48931,
    {
      key: "EME_PV_PANEL_AFFECT_HEATING",
    },
  ],
  [
    48932,
    {
      key: "EME_PV_PANEL_AFFECT_HOT_WATER",
    },
  ],
  [
    48944,
    {
      key: "_LOW_BRINE_OUT_TEMP_EP15",
      divideBy: 10,
    },
  ],
  [
    48947,
    {
      key: "OUTDOOR_AIR_FAN_SPEED_HIGH_TEMP",
    },
  ],
  [
    48948,
    {
      key: "FLM_PUMP_4",
    },
  ],
  [
    48949,
    {
      key: "FLM_PUMP_3",
    },
  ],
  [
    48950,
    {
      key: "FLM_PUMP_2",
    },
  ],
  [
    48951,
    {
      key: "FLM_4_DEFROST",
    },
  ],
  [
    48952,
    {
      key: "FLM_3_DEFROST",
    },
  ],
  [
    48953,
    {
      key: "FLM_2_DEFROST",
    },
  ],
  [
    48954,
    {
      key: "FLM_4_COOLING",
    },
  ],
  [
    48955,
    {
      key: "FLM_3_COOLING",
    },
  ],
  [
    48956,
    {
      key: "FLM_2_COOLING",
    },
  ],
  [
    48957,
    {
      key: "FLM_4_PUMP_SPEED",
    },
  ],
  [
    48958,
    {
      key: "FLM_3_PUMP_SPEED",
    },
  ],
  [
    48959,
    {
      key: "FLM_2_PUMP_SPEED",
    },
  ],
  [
    48960,
    {
      key: "FLM_1_PUMP_SPEED",
    },
  ],
  [
    48961,
    {
      key: "FLM_4_OVER_TEMP",
      divideBy: 10,
    },
  ],
  [
    48962,
    {
      key: "FLM_3_OVER_TEMP",
      divideBy: 10,
    },
  ],
  [
    48963,
    {
      key: "FLM_2_OVER_TEMP",
      divideBy: 10,
    },
  ],
  [
    48964,
    {
      key: "FLM_1_OVER_TEMP",
      divideBy: 10,
    },
  ],
  [
    48965,
    {
      key: "FLM_4_SET_POINT_COOLING",
      divideBy: 10,
    },
  ],
  [
    48966,
    {
      key: "FLM_3_SET_POINT_COOLING",
      divideBy: 10,
    },
  ],
  [
    48967,
    {
      key: "FLM_2_SET_POINT_COOLING",
      divideBy: 10,
    },
  ],
  [
    48968,
    {
      key: "FLM_1_SET_POINT_COOLING",
      divideBy: 10,
    },
  ],
  [
    48969,
    {
      key: "AUX_BLOCK_OPT",
    },
  ],
  [
    48970,
    {
      key: "OUTDOOR_AIR_MIXING_FUNCTION",
    },
  ],
  [
    48971,
    {
      key: "OUTDOOR_AIR_MAX_TEMP",
    },
  ],
  [
    48972,
    {
      key: "OUTDOOR_AIR_MIN_TEMP",
    },
  ],
  [
    48973,
    {
      key: "REDUCED_VENTILATION",
    },
  ],
  [
    48974,
    {
      key: "HIGH_OUTDOOR_AIR_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    48975,
    {
      key: "OEK_ACCESSORY",
    },
  ],
  [
    48976,
    {
      key: "SMART_HOME_ROOM_CONTROL",
    },
  ],
  [
    48977,
    {
      key: "SPEED_BRINE_PUMP_WAIT_MODE",
    },
  ],
  [
    48978,
    {
      key: "HOLIDAY",
    },
  ],
  [
    48979,
    {
      key: "SMART_ENERGY_SOURCE",
    },
  ],
  [
    48980,
    {
      key: "SMART_ENERGY_SOURCE_CTRL_METHOD",
    },
  ],
  [
    48981,
    {
      key: "SMART_ENERGY_SOURCE_ELECTRICITY_PRICE_SOURCE",
    },
  ],
  [
    48982,
    {
      key: "SMART_ENERGY_SOURCE_ELECTRICITY_PRICE",
    },
  ],
  [
    48983,
    {
      key: "SMART_ENERGY_SOURCE_FIXED_ELEC_PRICE_FROM",
    },
  ],
  [
    48984,
    {
      key: "SMART_ENERGY_SOURCE_FIXED_PART_ELECTRICITY_PRICE",
    },
  ],
  [
    48985,
    {
      key: "SMART_ENERGY_SOURCE_SHUNT_ADD_PRICE_SOURCE",
    },
  ],
  [
    48986,
    {
      key: "SMART_ENERGY_SOURCE_SHUNT_ADD_PRICE",
    },
  ],
  [
    48987,
    {
      key: "SMART_ENERGY_SOURCE_EXT_STEP_ADD_PRICE_FROM",
    },
  ],
  [
    48988,
    {
      key: "SMART_ENERGY_SOURCE_EXT_STEP_ADD_PRICE",
    },
  ],
  [
    48989,
    {
      key: "SMART_ENERGY_SOURCE_PRICE_SOURCE_OPT10",
    },
  ],
  [
    48990,
    {
      key: "SMART_ENERGY_SOURCE_PRICE_OPT10",
    },
  ],
  [
    48991,
    {
      key: "CO2_ELECTRICITY",
    },
  ],
  [
    48992,
    {
      key: "CO2_EXT_SHUNTED_CONTR_ADD",
    },
  ],
  [
    48993,
    {
      key: "CO2_EXT_STEP_CONTR_ADD",
    },
  ],
  [
    48994,
    {
      key: "CO2_OPT10_CONTR_ADDITION_OPT10",
    },
  ],
  [
    48995,
    {
      key: "SMART_ENERGY_SOURCE_HIGH_TARIFF_PRICE_OPT10",
    },
  ],
  [
    48996,
    {
      key: "SMART_ENERGY_SOURCE_LOW_TARIFF_PRICE_OPT10",
    },
  ],
  [
    48997,
    {
      key: "SMART_ENERGY_SOURCE_EXT_STEP_ADD_HIGH_TARIFF_PRICE",
    },
  ],
  [
    48998,
    {
      key: "SMART_ENERGY_SOURCE_EXT_STEP_ADD_LOW_TARIFF_PRICE",
    },
  ],
  [
    48999,
    {
      key: "SMART_ENERGY_SOURCE_SHUNT_ADD_HIGH_TARIFF_PRICE",
    },
  ],
  [
    49000,
    {
      key: "SMART_ENERGY_SOURCE_SHUNT_ADD_LOW_TARIFF_PRICE",
    },
  ],
  [
    49001,
    {
      key: "SMART_ENERGY_SOURCE_FIXED_ELEC_HIGH_TARIFF_PRICE",
    },
  ],
  [
    49002,
    {
      key: "SMART_ENERGY_SOURCE_FIXED_ELEC_LOW_TARIFF_PRICE",
    },
  ],
  [
    49003,
    {
      key: "SMART_ENERGY_SOURCE_ELECTRICITY_HIGH_TARIFF_PRICE",
    },
  ],
  [
    49004,
    {
      key: "SMART_ENERGY_SOURCE_ELECTRICITY_HIGH_LOW_PRICE",
    },
  ],
  [
    49005,
    {
      key: "SMART_ENERGY_SOURCE_DM_DIFF_SOURCE_PRIO_5",
    },
  ],
  [
    49006,
    {
      key: "SMART_ENERGY_SOURCE_DM_DIFF_SOURCE_PRIO_4",
    },
  ],
  [
    49007,
    {
      key: "SMART_ENERGY_SOURCE_DM_DIFF_SOURCE_PRIO_3",
    },
  ],
  [
    49008,
    {
      key: "SMART_ENERGY_SOURCE_DM_DIFF_SOURCE_PRIO_2",
    },
  ],
  [
    49009,
    {
      key: "SMART_ENERGY_SOURCE_DM_START_SOURCE_PRIO_1",
    },
  ],
  [
    49010,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49011,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49012,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49013,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49014,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49015,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49016,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49017,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49018,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49019,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49020,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49021,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49022,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49023,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49024,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49025,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49026,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49027,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49028,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49029,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49030,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49031,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49032,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49033,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49034,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49035,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49036,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49037,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49038,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49039,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49040,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49041,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49042,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49043,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49044,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49045,
    {
      key: "TARIFF_SETTINGS_ELECTRIC_PRICE",
    },
  ],
  [
    49046,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49047,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49048,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49049,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49050,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49051,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49052,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49053,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49054,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49055,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49056,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49057,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49058,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49059,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49060,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49061,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49062,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49063,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49064,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49065,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49066,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49067,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49068,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49069,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49070,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49071,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49072,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49073,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49074,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49075,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49076,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49077,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49078,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49079,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49080,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49081,
    {
      key: "TARIFF_SETTINGS_FIXED_PRICE",
    },
  ],
  [
    49082,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49083,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49084,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49085,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49086,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49087,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49088,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49089,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49090,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49091,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49092,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49093,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49094,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49095,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49096,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49097,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49098,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49099,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49100,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49101,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49102,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49103,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49104,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49105,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49106,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49107,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49108,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49109,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49110,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49111,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49112,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49113,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49114,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49115,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49116,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49117,
    {
      key: "TARIFF_SETTINGS_ADDITION_OPT10",
    },
  ],
  [
    49118,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49119,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49120,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49121,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49122,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49123,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49124,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49125,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49126,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49127,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49128,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49129,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49130,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49131,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49132,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49133,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49134,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49135,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49136,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49137,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49138,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49139,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49140,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49141,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49142,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49143,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49144,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49145,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49146,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49147,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49148,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49149,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49150,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49151,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49152,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49153,
    {
      key: "TARIFF_SETTINGS_EXTERNAL_SHUNT_ADDITION",
    },
  ],
  [
    49154,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49155,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49156,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49157,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49158,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49159,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49160,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49161,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49162,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49163,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49164,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49165,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49166,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49167,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49168,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49169,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49170,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49171,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49172,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49173,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49174,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49175,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49176,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49177,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49178,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49179,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49180,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49181,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49182,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49183,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49184,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49185,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49186,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49187,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49188,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49189,
    {
      key: "TARIFF_SETTINGS_EXT_STEP_ADD",
    },
  ],
  [
    49190,
    {
      key: "GROUND_WATER_PUMP_TEMP_ALARM",
    },
  ],
  [
    49191,
    {
      key: "GROUND_WATER_PUMP_TEMP_ALARM_LEVEL",
      divideBy: 10,
    },
  ],
  [
    49192,
    {
      key: "FIXED_DELTA_T_BRINE_PUMP",
      divideBy: 10,
    },
  ],
  [
    49193,
    {
      key: "BRINE_PUMP_AUTO_CONTROLLED",
    },
  ],
  [
    49202,
    {
      key: "PRIORITIZE_ADDITION_AXC40",
    },
  ],
  [
    49203,
    {
      key: "WOOD_BOILER_DIFF",
    },
  ],
  [
    49204,
    {
      key: "WEATHER_DATA_ACTIVATION",
    },
  ],
  [
    49205,
    {
      key: "NUMBER_OF_HOURS_TO_CHECK_DERIVATA",
    },
  ],
  [
    49206,
    {
      key: "MAX_WEATHER_DATA_NEGATIVE_CHANGE",
    },
  ],
  [
    49207,
    {
      key: "MAX_WEATHER_DATA_POSITIVE_CHANGE",
    },
  ],
  [
    49208,
    {
      key: "MAX_DIFF_SES_PRIO_1",
      divideBy: 10,
    },
  ],
  [
    49209,
    {
      key: "MAX_DIFF_SES_OTHER_PRIOS",
      divideBy: 10,
    },
  ],
  [
    49221,
    {
      key: "DELTA_BRINE_PUMP_PASSIVE_COOLING",
      divideBy: 10,
    },
  ],
  [
    49223,
    {
      key: "SCA_SOLAR_HEATING",
    },
  ],
  [
    49224,
    {
      key: "SCA_EXT_HOT_WATER",
    },
  ],
  [
    49225,
    {
      key: "MAX_ADD_POWER",
      divideBy: 10,
    },
  ],
  [
    49226,
    {
      key: "OPT_GAS_TYPE",
    },
  ],
  [
    49227,
    {
      key: "BLOCK_TOP_FREQUENCIES",
    },
  ],
  [
    49228,
    {
      key: "DM_START_VALUE_EP15",
    },
  ],
  [
    49229,
    {
      key: "DM_START_VALUE_EP14",
    },
  ],
  [
    49230,
    {
      key: "INTERNAL_HW_ADD_IN_TANK_USE_IN_HEAT",
    },
  ],
  [
    49231,
    {
      key: "FUSE",
    },
  ],
  [
    49232,
    {
      key: "INSTALLED_EB108",
    },
  ],
  [
    49233,
    {
      key: "INSTALLED_EB107",
    },
  ],
  [
    49234,
    {
      key: "INSTALLED_EB106",
    },
  ],
  [
    49235,
    {
      key: "INSTALLED_EB105",
    },
  ],
  [
    49236,
    {
      key: "INSTALLED_EB104",
    },
  ],
  [
    49237,
    {
      key: "INSTALLED_EB103",
    },
  ],
  [
    49238,
    {
      key: "INSTALLED_EB102",
    },
  ],
  [
    49239,
    {
      key: "INSTALLED_EB101",
    },
  ],
  [
    49241,
    {
      key: "EXTERNAL_ERS_1_ACCESSORY_BYPASS_SET_TEMP",
      divideBy: 10,
    },
  ],
  [
    49242,
    {
      key: "EXTERNAL_ERS_1_ACCESSORY_BYPASS_AT_HEAT",
    },
  ],
  [
    49243,
    {
      key: "SPEED_CIRC_PUMP_HW_EP15",
    },
  ],
  [
    49244,
    {
      key: "SPEED_CIRC_PUMP_HEAT_EP15",
    },
  ],
  [
    49245,
    {
      key: "SPEED_CIRC_PUMP_POOL_EP15",
    },
  ],
  [
    49246,
    {
      key: "SPEED_CIRCULATION_PUMP_PASSIVE_COOLING_EP15",
    },
  ],
  [
    49247,
    {
      key: "SPEED_CIRCULATION_PUMP_ACTIVE_COOLING_EP15",
    },
  ],
  [
    49248,
    {
      key: "SPEED_BRINE_PUMP_EP15",
    },
  ],
  [
    49249,
    {
      key: "SPEED_BRINE_PUMP_PASSIVE_COOLING_EP15",
    },
  ],
  [
    49250,
    {
      key: "SPEED_BRINE_PUMP_ACTIVE_COOLING_EP15",
    },
  ],
  [
    49251,
    {
      key: "WAITING_SPEED_BRINE_PUMP_COOLING_EP15",
    },
  ],
  [
    49252,
    {
      key: "_SPEED_BRINE_PUMP_WAIT_MODE_EP15",
    },
  ],
  [
    49253,
    {
      key: "VBFE_DM_REG_H",
    },
  ],
  [
    49254,
    {
      key: "VBFE_DM_REG_TI",
    },
  ],
  [
    49255,
    {
      key: "VBFE_DM_REG_I",
    },
  ],
  [
    49256,
    {
      key: "VBFE_DM_REG_K",
    },
  ],
  [
    49257,
    {
      key: "VBFE_DM_OFFSET",
    },
  ],
  [
    49258,
    {
      key: "VBFE_H",
    },
  ],
  [
    49259,
    {
      key: "VBFE_TI",
    },
  ],
  [
    49260,
    {
      key: "VBFE_K",
    },
  ],
  [
    49261,
    {
      key: "VBFE_TD",
    },
  ],
  [
    49262,
    {
      key: "VBFE_N",
    },
  ],
  [
    49263,
    {
      key: "VBFE_MIN_ERROR",
    },
  ],
  [
    49264,
    {
      key: "VBFE_MAX_ERROR",
    },
  ],
  [
    49265,
    {
      key: "VBFE_MAX_DIFF",
    },
  ],
  [
    49266,
    {
      key: "VBFE_DM_OFFSET",
    },
  ],
  [
    49267,
    {
      key: "VBFE_C_VALUE",
    },
  ],
  [
    49269,
    {
      key: "VBFE_I_VALUE",
    },
  ],
  [
    49271,
    {
      key: "VBFE_U_VALUE",
    },
  ],
  [
    49273,
    {
      key: "VBFE_DERIVATA_PART",
    },
  ],
  [
    49274,
    {
      key: "VBFE_ERROR_WITH_LIMITS",
    },
  ],
  [
    49275,
    {
      key: "VBFE_SET_VALUE",
    },
  ],
  [
    49276,
    {
      key: "VBFE_ERROR_USED",
    },
  ],
  [
    49277,
    {
      key: "FLM_4_FAN",
    },
  ],
  [
    49278,
    {
      key: "FLM_3_FAN",
    },
  ],
  [
    49279,
    {
      key: "FLM_2_FAN",
    },
  ],
  [
    49280,
    {
      key: "FLM_1_FAN",
    },
  ],
  [
    49281,
    {
      key: "SAM_FAN_MODEL",
    },
  ],
  [
    49282,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1",
    },
  ],
  [
    49283,
    {
      key: "VBFE_OFFSET_TO_BT25",
    },
  ],
  [
    49284,
    {
      key: "VBFE_DM_FLAT_AREA",
    },
  ],
  [
    49285,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49286,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X22",
    },
  ],
  [
    49287,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49288,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X22",
    },
  ],
  [
    49289,
    {
      key: "GROUND_WATER_PUMP_SPEED_CONTROL",
    },
  ],
  [
    49290,
    {
      key: "GROUND_WATER_PUMP_AUTO_SPEED_CONTROL",
    },
  ],
  [
    49291,
    {
      key: "GROUND_WATER_PUMP_MANUAL_SPEED",
    },
  ],
  [
    49292,
    {
      key: "GROUND_WATER_PUMP_CONTROL_SIGNAL",
    },
  ],
  [
    49293,
    {
      key: "GROUND_WATER_PUMP_MIN_SPEED",
    },
  ],
  [
    49294,
    {
      key: "DM_DIFF_START_ADD",
    },
  ],
  [
    49295,
    {
      key: "AHPS_EXTERNAL_ADDITION_START_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    49296,
    {
      key: "AHPS_EXTERNAL_ADDITION_STOP_TEMPERATURE",
      divideBy: 10,
    },
  ],
  [
    49297,
    {
      key: "ACTIVATED_EME20",
    },
  ],
  [
    49298,
    {
      key: "EME_PV_PANEL_AFFECT_POOL",
    },
  ],
  [
    49299,
    {
      key: "VBFE_BALANCE_POINT",
    },
  ],
  [
    49300,
    {
      key: "VBFE_ACTUAL_VALUE_USED",
    },
  ],
  [
    49301,
    {
      key: "SPEED_CIRC_PUMP_ADD_PRIO",
    },
  ],
  [
    49302,
    {
      key: "SPEED_CIRC_PUMP_ADD_PRIO",
    },
  ],
  [
    49303,
    {
      key: "SPEED_CIRC_PUMP_ADD_PRIO",
    },
  ],
  [
    49304,
    {
      key: "SPEED_CIRC_PUMP_ADD_PRIO",
    },
  ],
  [
    49305,
    {
      key: "SPEED_CIRC_PUMP_ADD_PRIO",
    },
  ],
  [
    49306,
    {
      key: "SPEED_CIRC_PUMP_ADD_PRIO",
    },
  ],
  [
    49307,
    {
      key: "SPEED_CIRC_PUMP_ADD_PRIO",
    },
  ],
  [
    49308,
    {
      key: "SPEED_CIRC_PUMP_ADD_PRIO",
    },
  ],
  [
    49328,
    {
      key: "ERS_4_EXHAUST_FAN_SPEED_4",
    },
  ],
  [
    49329,
    {
      key: "ERS_3_EXHAUST_FAN_SPEED_4",
    },
  ],
  [
    49330,
    {
      key: "ERS_2_EXHAUST_FAN_SPEED_4",
    },
  ],
  [
    49331,
    {
      key: "ERS_4_EXHAUST_FAN_SPEED_3",
    },
  ],
  [
    49332,
    {
      key: "ERS_3_EXHAUST_FAN_SPEED_3",
    },
  ],
  [
    49333,
    {
      key: "ERS_2_EXHAUST_FAN_SPEED_3",
    },
  ],
  [
    49334,
    {
      key: "ERS_4_EXHAUST_FAN_SPEED_2",
    },
  ],
  [
    49335,
    {
      key: "ERS_3_EXHAUST_FAN_SPEED_2",
    },
  ],
  [
    49336,
    {
      key: "ERS_2_EXHAUST_FAN_SPEED_2",
    },
  ],
  [
    49337,
    {
      key: "ERS_4_EXHAUST_FAN_SPEED_1",
    },
  ],
  [
    49338,
    {
      key: "ERS_3_EXHAUST_FAN_SPEED_1",
    },
  ],
  [
    49339,
    {
      key: "ERS_2_EXHAUST_FAN_SPEED_1",
    },
  ],
  [
    49340,
    {
      key: "ERS_4_EXHAUST_FAN_SPEED_NORMAL",
    },
  ],
  [
    49341,
    {
      key: "ERS_3_EXHAUST_FAN_SPEED_NORMAL",
    },
  ],
  [
    49342,
    {
      key: "ERS_2_EXHAUST_FAN_SPEED_NORMAL",
    },
  ],
  [
    49343,
    {
      key: "ERS_4_SUPPLY_FAN_SPEED_4",
    },
  ],
  [
    49344,
    {
      key: "ERS_3_SUPPLY_FAN_SPEED_4",
    },
  ],
  [
    49345,
    {
      key: "ERS_2_SUPPLY_FAN_SPEED_4",
    },
  ],
  [
    49346,
    {
      key: "ERS_4_SUPPLY_FAN_SPEED_3",
    },
  ],
  [
    49347,
    {
      key: "ERS_3_SUPPLY_FAN_SPEED_3",
    },
  ],
  [
    49348,
    {
      key: "ERS_2_SUPPLY_FAN_SPEED_3",
    },
  ],
  [
    49349,
    {
      key: "ERS_4_SUPPLY_FAN_SPEED_2",
    },
  ],
  [
    49350,
    {
      key: "ERS_3_SUPPLY_FAN_SPEED_2",
    },
  ],
  [
    49351,
    {
      key: "ERS_2_SUPPLY_FAN_SPEED_2",
    },
  ],
  [
    49352,
    {
      key: "ERS_4_SUPPLY_FAN_SPEED_1",
    },
  ],
  [
    49353,
    {
      key: "ERS_3_SUPPLY_FAN_SPEED_1",
    },
  ],
  [
    49354,
    {
      key: "ERS_2_SUPPLY_FAN_SPEED_1",
    },
  ],
  [
    49355,
    {
      key: "ERS_4_SUPPLY_FAN_SPEED_NORMAL",
    },
  ],
  [
    49356,
    {
      key: "ERS_3_SUPPLY_FAN_SPEED_NORMAL",
    },
  ],
  [
    49357,
    {
      key: "ERS_2_SUPPLY_FAN_SPEED_NORMAL",
    },
  ],
  [
    49358,
    {
      key: "NIGHT_COOLING",
    },
  ],
  [
    49359,
    {
      key: "NIGHT_COOLING",
    },
  ],
  [
    49360,
    {
      key: "NIGHT_COOLING",
    },
  ],
  [
    49361,
    {
      key: "START_ROOM_TEMP_NIGHT_COOLING",
      divideBy: 10,
    },
  ],
  [
    49362,
    {
      key: "START_ROOM_TEMP_NIGHT_COOLING",
      divideBy: 10,
    },
  ],
  [
    49363,
    {
      key: "START_ROOM_TEMP_NIGHT_COOLING",
      divideBy: 10,
    },
  ],
  [
    49364,
    {
      key: "NIGHT_COOLING_MIN_DIFF",
      divideBy: 10,
    },
  ],
  [
    49365,
    {
      key: "NIGHT_COOLING_MIN_DIFF",
      divideBy: 10,
    },
  ],
  [
    49366,
    {
      key: "NIGHT_COOLING_MIN_DIFF",
      divideBy: 10,
    },
  ],
  [
    49367,
    {
      key: "ERS_4_ACCESSORY",
    },
  ],
  [
    49368,
    {
      key: "ERS_3_ACCESSORY",
    },
  ],
  [
    49369,
    {
      key: "ERS_2_ACCESSORY",
    },
  ],
  [
    49370,
    {
      key: "EXTERNAL_ERS_4_ACCESSORY_MIN_EXHAUST_TEMP",
      divideBy: 10,
    },
  ],
  [
    49371,
    {
      key: "EXTERNAL_ERS_3_ACCESSORY_MIN_EXHAUST_TEMP",
      divideBy: 10,
    },
  ],
  [
    49372,
    {
      key: "EXTERNAL_ERS_2_ACCESSORY_MIN_EXHAUST_TEMP",
      divideBy: 10,
    },
  ],
  [
    49373,
    {
      key: "EXTERNAL_ERS_4_ACCESSORY_BYPASS_TEMP",
      divideBy: 10,
    },
  ],
  [
    49374,
    {
      key: "EXTERNAL_ERS_3_ACCESSORY_BYPASS_TEMP",
      divideBy: 10,
    },
  ],
  [
    49375,
    {
      key: "EXTERNAL_ERS_2_ACCESSORY_BYPASS_TEMP",
      divideBy: 10,
    },
  ],
  [
    49376,
    {
      key: "EXTERNAL_ERS_4_ACCESSORY_BYPASS_SET_TEMP",
      divideBy: 10,
    },
  ],
  [
    49377,
    {
      key: "EXTERNAL_ERS_3_ACCESSORY_BYPASS_SET_TEMP",
      divideBy: 10,
    },
  ],
  [
    49378,
    {
      key: "EXTERNAL_ERS_2_ACCESSORY_BYPASS_SET_TEMP",
      divideBy: 10,
    },
  ],
  [
    49379,
    {
      key: "EXTERNAL_ERS_4_ACCESSORY_BYPASS_AT_HEAT",
    },
  ],
  [
    49380,
    {
      key: "EXTERNAL_ERS_3_ACCESSORY_BYPASS_AT_HEAT",
    },
  ],
  [
    49381,
    {
      key: "EXTERNAL_ERS_2_ACCESSORY_BYPASS_AT_HEAT",
    },
  ],
  [
    49430,
    {
      key: "AUX_ERS_FIRE_PLACE_GUARD",
    },
  ],
  [
    49431,
    {
      key: "STOP_TEMPERATURE_SUPPLY_AIR_HEATING",
      divideBy: 10,
    },
  ],
  [
    49432,
    {
      key: "F135_AUX_BLOCK_COMPRESSOR",
    },
  ],
  [
    49523,
    {
      key: "PV_PANEL_PHASE_SETTING_EME10",
    },
  ],
  [
    49524,
    {
      key: "ENERGY_METER_FACTOR_7_ACC",
    },
  ],
  [
    49525,
    {
      key: "ENERGY_METER_FACTOR_6_ACC",
    },
  ],
  [
    49526,
    {
      key: "ENERGY_METER_FACTOR_5_ACC",
    },
  ],
  [
    49527,
    {
      key: "ENERGY_METER_FACTOR_4_ACC",
    },
  ],
  [
    49528,
    {
      key: "ENERGY_METER_FACTOR_3_ACC",
    },
  ],
  [
    49529,
    {
      key: "ENERGY_METER_FACTOR_2_ACC",
    },
  ],
  [
    49530,
    {
      key: "ENERGY_METER_FACTOR_1_ACC",
    },
  ],
  [
    49531,
    {
      key: "ENERGY_METER_FACTOR_0_ACC",
    },
  ],
  [
    49532,
    {
      key: "ENERGY_METER_8_ACCESSORY",
    },
  ],
  [
    49533,
    {
      key: "ENERGY_METER_7_ACCESSORY",
    },
  ],
  [
    49534,
    {
      key: "ENERGY_METER_6_ACCESSORY",
    },
  ],
  [
    49535,
    {
      key: "ENERGY_METER_5_ACCESSORY",
    },
  ],
  [
    49536,
    {
      key: "ENERGY_METER_4_ACCESSORY",
    },
  ],
  [
    49537,
    {
      key: "ENERGY_METER_3_ACCESSORY",
    },
  ],
  [
    49538,
    {
      key: "ENERGY_METER_2_ACCESSORY",
    },
  ],
  [
    49539,
    {
      key: "ENERGY_METER_1_ACCESSORY",
    },
  ],
  [
    49540,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49541,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49542,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49543,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49544,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49545,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49546,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49547,
    {
      key: "ENERGY_METER_PULSES_PER_KWH_X23",
    },
  ],
  [
    49548,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49549,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49550,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49551,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49552,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49553,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49554,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49555,
    {
      key: "FLOW_SENSOR_ENERGY_METER_MODE_X23",
    },
  ],
  [
    49557,
    {
      key: "ENERGY_METER_ACCESSORY",
    },
  ],
  [
    49558,
    {
      key: "FLM_4_DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49559,
    {
      key: "FLM_3_DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49560,
    {
      key: "FLM_2_DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49561,
    {
      key: "FLM_1_DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49562,
    {
      key: "GREENMASTER_FAN_CONTROL_ACCESSORY",
    },
  ],
  [
    49563,
    {
      key: "DAYS_BETWEEN_EXERCISE_FIRE_DAMPER",
    },
  ],
  [
    49564,
    {
      key: "TEMPERARURE_TO_ACTIVATE_FIRE_ALARM",
      divideBy: 10,
    },
  ],
  [
    49565,
    {
      key: "SELECTED_UNIT_GREENMASTER",
    },
  ],
  [
    49566,
    {
      key: "FAN_PRESSURE_SET_POINT_GREENMASTER",
    },
  ],
  [
    49567,
    {
      key: "FAN_MIN_SPEED_GREENMASTER",
    },
  ],
  [
    49568,
    {
      key: "FAN_MAX_SPEED_GREENMASTER",
    },
  ],
  [
    49569,
    {
      key: "PRESSURE_TO_ACTIVATE_FILER_ALARM_GREENMASTER",
    },
  ],
  [
    49570,
    {
      key: "MONTHS_BETWEEN_FILTER_ALARMS_GREENMASTER",
    },
  ],
  [
    49571,
    {
      key: "RUN_TIME_DAMPER_QM41_GREENMASTER",
    },
  ],
  [
    49572,
    {
      key: "OUTDOOR_TEMP_COMPENSATION_GREENMASTER",
    },
  ],
  [
    49573,
    {
      key: "FIRE_ALARM_TYPE_GREENMASTER",
    },
  ],
  [
    49574,
    {
      key: "FIRE_ALARM_FAN_SPEED_GREENMASTER",
    },
  ],
  [
    49580,
    {
      key: "GM_F_C_MAN_START_EXERCISE",
    },
  ],
  [
    49581,
    {
      key: "GM_F_C_REG_PARAM_N",
    },
  ],
  [
    49582,
    {
      key: "GM_F_C_REG_PARAM_TD",
    },
  ],
  [
    49583,
    {
      key: "GM_F_C_REG_PARAM_TI",
    },
  ],
  [
    49584,
    {
      key: "GM_F_C_REG_PARAM_KC",
    },
  ],
  [
    49585,
    {
      key: "GM_F_C_REG_PARAM_H",
    },
  ],
  [
    49586,
    {
      key: "HTS_ACCESSORY_4",
    },
  ],
  [
    49587,
    {
      key: "HTS_ACCESSORY_3",
    },
  ],
  [
    49588,
    {
      key: "HTS_ACCESSORY_2",
    },
  ],
  [
    49589,
    {
      key: "HUMIDITY_FACTOR_S8",
    },
  ],
  [
    49590,
    {
      key: "HUMIDITY_FACTOR_S7",
    },
  ],
  [
    49591,
    {
      key: "HUMIDITY_FACTOR_S6",
    },
  ],
  [
    49592,
    {
      key: "HUMIDITY_FACTOR_S5",
    },
  ],
  [
    49593,
    {
      key: "HUMIDITY_FACTOR_S4",
    },
  ],
  [
    49594,
    {
      key: "HUMIDITY_FACTOR_S3",
    },
  ],
  [
    49595,
    {
      key: "HUMIDITY_FACTOR_S2",
    },
  ],
  [
    49596,
    {
      key: "HUMIDITY_COOL_FACTOR_S8",
    },
  ],
  [
    49597,
    {
      key: "HUMIDITY_COOL_FACTOR_S7",
    },
  ],
  [
    49598,
    {
      key: "HUMIDITY_COOL_FACTOR_S6",
    },
  ],
  [
    49599,
    {
      key: "HUMIDITY_COOL_FACTOR_S5",
    },
  ],
  [
    49600,
    {
      key: "HUMIDITY_COOL_FACTOR_S4",
    },
  ],
  [
    49601,
    {
      key: "HUMIDITY_COOL_FACTOR_S3",
    },
  ],
  [
    49602,
    {
      key: "HUMIDITY_COOL_FACTOR_S2",
    },
  ],
  [
    49603,
    {
      key: "HTS_AFFECTING_SYS_8",
    },
  ],
  [
    49604,
    {
      key: "HTS_AFFECTING_SYS_7",
    },
  ],
  [
    49605,
    {
      key: "HTS_AFFECTING_SYS_6",
    },
  ],
  [
    49606,
    {
      key: "HTS_AFFECTING_SYS_5",
    },
  ],
  [
    49607,
    {
      key: "HTS_AFFECTING_SYS_4",
    },
  ],
  [
    49608,
    {
      key: "HTS_AFFECTING_SYS_3",
    },
  ],
  [
    49609,
    {
      key: "HTS_AFFECTING_SYS_2",
    },
  ],
  [
    49610,
    {
      key: "HTS_AFFECTING_SYS_1",
    },
  ],
  [
    49611,
    {
      key: "EXTERNAL_4_ACCESSORY_DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49612,
    {
      key: "EXTERNAL_3_ACCESSORY_DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49613,
    {
      key: "EXTERNAL_2_ACCESSORY_DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49614,
    {
      key: "EXTERNAL_1_ACCESSORY_DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49615,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED_FLM_4",
    },
  ],
  [
    49616,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED_FLM_3",
    },
  ],
  [
    49617,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED_FLM_2",
    },
  ],
  [
    49618,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED_FLM_1",
    },
  ],
  [
    49619,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED_FLM_4",
    },
  ],
  [
    49620,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED_FLM_3",
    },
  ],
  [
    49621,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED_FLM_2",
    },
  ],
  [
    49622,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED_FLM_1",
    },
  ],
  [
    49623,
    {
      key: "DCV_TIME_BETWEEN_FAN_SPEED_CHANGES_FLM_1",
    },
  ],
  [
    49624,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS_FLM_4",
    },
  ],
  [
    49625,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS_FLM_3",
    },
  ],
  [
    49626,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS_FLM_2",
    },
  ],
  [
    49627,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS_FLM_1",
    },
  ],
  [
    49628,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS_FLM_4",
    },
  ],
  [
    49629,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS_FLM_3",
    },
  ],
  [
    49630,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS_FLM_2",
    },
  ],
  [
    49631,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS_FLM_1",
    },
  ],
  [
    49632,
    {
      key: "DEMAND_CONTROLLED_VENTILATION",
    },
  ],
  [
    49633,
    {
      key: "DESIRED_RH",
    },
  ],
  [
    49634,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MAX_FAN_SPEED",
    },
  ],
  [
    49635,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_MIN_FAN_SPEED",
    },
  ],
  [
    49636,
    {
      key: "DCV_TIME_BETWEEN_FAN_SPEED_CHANGES",
    },
  ],
  [
    49637,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_1_HTS",
    },
  ],
  [
    49638,
    {
      key: "DEMAND_CONTROLLED_VENTILATION_CONTR_SENSOR_2_HTS",
    },
  ],
  [
    49639,
    {
      key: "CPR_REG_HEATING_H",
    },
  ],
  [
    49640,
    {
      key: "CPR_REG_HEATING_TI",
    },
  ],
  [
    49641,
    {
      key: "CPR_REG_HEATING_K",
    },
  ],
  [
    49642,
    {
      key: "CPR_REG_HEATING_TD",
    },
  ],
  [
    49643,
    {
      key: "CPR_REG_HEATING_N",
    },
  ],
  [
    49644,
    {
      key: "CPR_REG_HEATING_ME",
    },
  ],
  [
    49645,
    {
      key: "CPR_REG_HEATING_ME",
    },
  ],
  [
    49700,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_S8",
    },
  ],
  [
    49701,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_S7",
    },
  ],
  [
    49702,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_S6",
    },
  ],
  [
    49703,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_S5",
    },
  ],
  [
    49704,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_S4",
    },
  ],
  [
    49705,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_S3",
    },
  ],
  [
    49706,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_S2",
    },
  ],
  [
    49707,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_S1",
    },
  ],
  [
    49708,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_WITH_ROOM_SENSOR_S8",
      divideBy: 10,
    },
  ],
  [
    49709,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_WITH_ROOM_SENSOR_S7",
      divideBy: 10,
    },
  ],
  [
    49710,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_WITH_ROOM_SENSOR_S6",
      divideBy: 10,
    },
  ],
  [
    49711,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_WITH_ROOM_SENSOR_S5",
      divideBy: 10,
    },
  ],
  [
    49712,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_WITH_ROOM_SENSOR_S4",
      divideBy: 10,
    },
  ],
  [
    49713,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_WITH_ROOM_SENSOR_S3",
      divideBy: 10,
    },
  ],
  [
    49714,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_WITH_ROOM_SENSOR_S2",
      divideBy: 10,
    },
  ],
  [
    49715,
    {
      key: "EXTERNAL_ADJUSTMENT_COOLING_WITH_ROOM_SENSOR_S1",
      divideBy: 10,
    },
  ],
  [
    49725,
    {
      key: "GROUND_WATER_PUMP_SPEED_PASSIVE_COOLING",
    },
  ],
  [
    49726,
    {
      key: "_AXC20",
    },
  ],
  [
    49727,
    {
      key: "POWER_NEEDED_KW_AT_DOT",
      divideBy: 10,
    },
  ],
  [
    49728,
    {
      key: "DOT_POWER_MANUAL_SET",
    },
  ],
  [
    49729,
    {
      key: "SUPER_COOLING_ON_OFF",
    },
  ],
  [
    49730,
    {
      key: "ERS_4_PRODUCT",
    },
  ],
  [
    49731,
    {
      key: "ERS_3_PRODUCT",
    },
  ],
  [
    49732,
    {
      key: "ERS_2_PRODUCT",
    },
  ],
  [
    49733,
    {
      key: "ERS_1_PRODUCT",
    },
  ],
  [
    49734,
    {
      key: "ERS_4_BLOCK_ACTION",
    },
  ],
  [
    49735,
    {
      key: "ERS_3_BLOCK_ACTION",
    },
  ],
  [
    49736,
    {
      key: "ERS_2_BLOCK_ACTION",
    },
  ],
  [
    49737,
    {
      key: "ERS_1_BLOCK_ACTION",
    },
  ],
  [
    49738,
    {
      key: "PRIORITIZE_HOUSEHOLD_ELECTRICITY_EME20",
    },
  ],
  [
    49739,
    {
      key: "ENERGY_METER_SETTING_EME20",
    },
  ],
  [
    49776,
    {
      key: "USEASS8_BT20",
    },
  ],
  [
    49777,
    {
      key: "USEASS7_BT20",
    },
  ],
  [
    49778,
    {
      key: "USEASS6_BT20",
    },
  ],
  [
    49779,
    {
      key: "USEASS5_BT20",
    },
  ],
  [
    49780,
    {
      key: "USEASS4_BT20",
    },
  ],
  [
    49781,
    {
      key: "USEASS3_BT20",
    },
  ],
  [
    49782,
    {
      key: "USEASS2_BT20",
    },
  ],
  [
    49783,
    {
      key: "USEASS1_BT20",
    },
  ],
  [
    49784,
    {
      key: "MIN_F2400_CHARGE_PUMP_SPEED_EB108",
    },
  ],
  [
    49785,
    {
      key: "MIN_F2400_CHARGE_PUMP_SPEED_EB107",
    },
  ],
  [
    49786,
    {
      key: "MIN_F2400_CHARGE_PUMP_SPEED_EB106",
    },
  ],
  [
    49787,
    {
      key: "MIN_F2400_CHARGE_PUMP_SPEED_EB105",
    },
  ],
  [
    49788,
    {
      key: "MIN_F2400_CHARGE_PUMP_SPEED_EB104",
    },
  ],
  [
    49789,
    {
      key: "MIN_F2400_CHARGE_PUMP_SPEED_EB103",
    },
  ],
  [
    49790,
    {
      key: "MIN_F2400_CHARGE_PUMP_SPEED_EB102",
    },
  ],
  [
    49791,
    {
      key: "MIN_F2400_CHARGE_PUMP_SPEED_EB101",
    },
  ],
  [
    49797,
    {
      key: "GM_F_C_TEMP_TO_ACTIVATE_CONDENSOR_HEATER",
      divideBy: 10,
    },
  ],
  [
    49798,
    {
      key: "ACTIVATED_TSS20",
    },
  ],
  [
    49799,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_EB108",
    },
  ],
  [
    49800,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1_EB107",
    },
  ],
  [
    49801,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1_EB106",
    },
  ],
  [
    49802,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1_EB105",
    },
  ],
  [
    49803,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1_EB104",
    },
  ],
  [
    49804,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1_EB103",
    },
  ],
  [
    49805,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1_EB102",
    },
  ],
  [
    49806,
    {
      key: "SILENT_MODE_MAX_COMPRESSOR_SPEED_1_EB101",
    },
  ],
  [
    49807,
    {
      key: "CPR_REG_COOLING_H",
    },
  ],
  [
    49808,
    {
      key: "CPR_REG_COOLING_TI",
    },
  ],
  [
    49809,
    {
      key: "CPR_REG_COOLING_K",
    },
  ],
  [
    49810,
    {
      key: "CPR_REG_COOLING_TD",
    },
  ],
  [
    49811,
    {
      key: "CPR_REG_COOLING_N",
    },
  ],
  [
    49812,
    {
      key: "CPR_REG_COOLING_ME",
    },
  ],
  [
    49813,
    {
      key: "CPR_REG_COOLING_ME",
    },
  ],
  [
    49866,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49867,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49868,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49869,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49870,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49871,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49872,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49873,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49874,
    {
      key: "MIN_CHARGE_PUMP_REG_SPEED",
    },
  ],
  [
    49882,
    {
      key: "CLIMATE_SYSTEM_8_CTRLPUMP_GP10",
    },
  ],
  [
    49883,
    {
      key: "CLIMATE_SYSTEM_7_CTRLPUMP_GP10",
    },
  ],
  [
    49884,
    {
      key: "CLIMATE_SYSTEM_6_CTRLPUMP_GP10",
    },
  ],
  [
    49885,
    {
      key: "CLIMATE_SYSTEM_5_CTRLPUMP_GP10",
    },
  ],
  [
    49886,
    {
      key: "CLIMATE_SYSTEM_4_CTRLPUMP_GP10",
    },
  ],
  [
    49887,
    {
      key: "CLIMATE_SYSTEM_3_CTRLPUMP_GP10",
    },
  ],
  [
    49888,
    {
      key: "CLIMATE_SYSTEM_2_CTRLPUMP_GP10",
    },
  ],
  [
    49889,
    {
      key: "CLIMATE_SYSTEM_8_CTRLPUMP_MODE_GP10",
    },
  ],
  [
    49890,
    {
      key: "CLIMATE_SYSTEM_7_CTRLPUMP_MODE_GP10",
    },
  ],
  [
    49891,
    {
      key: "CLIMATE_SYSTEM_6_CTRLPUMP_MODE_GP10",
    },
  ],
  [
    49892,
    {
      key: "CLIMATE_SYSTEM_5_CTRLPUMP_MODE_GP10",
    },
  ],
  [
    49893,
    {
      key: "CLIMATE_SYSTEM_4_CTRLPUMP_MODE_GP10",
    },
  ],
  [
    49894,
    {
      key: "CLIMATE_SYSTEM_3_CTRLPUMP_MODE_GP10",
    },
  ],
  [
    49895,
    {
      key: "CLIMATE_SYSTEM_2_CTRLPUMP_MODE_GP10",
    },
  ],
  [
    49896,
    {
      key: "CLIMATE_SYSTEM_8PUMP_SPEED_GP10",
    },
  ],
  [
    49897,
    {
      key: "CLIMATE_SYSTEM_7_CTRLPUMP_SPEED_GP10",
    },
  ],
  [
    49898,
    {
      key: "CLIMATE_SYSTEM_6PUMP_SPEED_GP10",
    },
  ],
  [
    49899,
    {
      key: "CLIMATE_SYSTEM_5PUMP_SPEED_GP10",
    },
  ],
  [
    49900,
    {
      key: "CLIMATE_SYSTEM_4PUMP_SPEED_GP10",
    },
  ],
  [
    49901,
    {
      key: "CLIMATE_SYSTEM_3PUMP_SPEED_GP10",
    },
  ],
  [
    49902,
    {
      key: "CLIMATE_SYSTEM_2PUMP_SPEED_GP10",
    },
  ],
  [
    49903,
    {
      key: "ALARM_COOLING_SENSOR_CAN_APPEAR",
    },
  ],
  [
    49904,
    {
      key: "NIBE_PVT_SOURCE_ACCESSORY",
    },
  ],
  [
    49905,
    {
      key: "NIBE_PVT_SOURCE_AMPLICATION",
    },
  ],
  [
    49906,
    {
      key: "NIBE_PVT_SOURCE_WAIT_TIME",
    },
  ],
  [
    49907,
    {
      key: "NIBE_PVT_SOURCE_SET_TEMP",
      divideBy: 10,
    },
  ],
  [
    49908,
    {
      key: "SPEED_BRINE_PUMP_EXTERNAL_CTRL",
      divideBy: 10,
    },
  ],
]);