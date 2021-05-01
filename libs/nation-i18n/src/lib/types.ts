export interface GetNameOptions {
  select: 'all' | 'official' | 'alias';
}

export type CountryName<T extends GetNameOptions> = T extends { select: 'all' }
  ? string[]
  : string;

/** The key represents the alpha2Code of the country. */
export type LocalizedCountry<T extends GetNameOptions> = Record<
  string,
  CountryName<T>
>;

export type LocalizedCountryNames<
  T extends GetNameOptions
> = LocalizedCountry<T>;

/** The key represents the alpha2Code of the country. */
type LocaleDataCountry = Record<Alpha2Code, string | string[]>;

export type LocaleData = {
  locale: string;
  countries: LocaleDataCountry;
};

export type Alpha2Code =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'XK'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

export type Alpha3Code =
  | 'ABW'
  | 'AFG'
  | 'AGO'
  | 'AIA'
  | 'ALA'
  | 'ALB'
  | 'AND'
  | 'ARE'
  | 'ARG'
  | 'ARM'
  | 'ASM'
  | 'ATA'
  | 'ATF'
  | 'ATG'
  | 'AUS'
  | 'AUT'
  | 'AZE'
  | 'BDI'
  | 'BEL'
  | 'BEN'
  | 'BES'
  | 'BFA'
  | 'BGD'
  | 'BGR'
  | 'BHR'
  | 'BHS'
  | 'BIH'
  | 'BLM'
  | 'BLR'
  | 'BLZ'
  | 'BMU'
  | 'BOL'
  | 'BRA'
  | 'BRB'
  | 'BRN'
  | 'BTN'
  | 'BVT'
  | 'BWA'
  | 'CAF'
  | 'CAN'
  | 'CCK'
  | 'CHE'
  | 'CHL'
  | 'CHN'
  | 'CIV'
  | 'CMR'
  | 'COD'
  | 'COG'
  | 'COK'
  | 'COL'
  | 'COM'
  | 'CPV'
  | 'CRI'
  | 'CUB'
  | 'CUW'
  | 'CXR'
  | 'CYM'
  | 'CYP'
  | 'CZE'
  | 'DEU'
  | 'DJI'
  | 'DMA'
  | 'DNK'
  | 'DOM'
  | 'DZA'
  | 'ECU'
  | 'EGY'
  | 'ERI'
  | 'ESH'
  | 'ESP'
  | 'EST'
  | 'ETH'
  | 'FIN'
  | 'FJI'
  | 'FLK'
  | 'FRA'
  | 'FRO'
  | 'FSM'
  | 'GAB'
  | 'GBR'
  | 'GEO'
  | 'GGY'
  | 'GHA'
  | 'GIB'
  | 'GIN'
  | 'GLP'
  | 'GMB'
  | 'GNB'
  | 'GNQ'
  | 'GRC'
  | 'GRD'
  | 'GRL'
  | 'GTM'
  | 'GUF'
  | 'GUM'
  | 'GUY'
  | 'HKG'
  | 'HMD'
  | 'HND'
  | 'HRV'
  | 'HTI'
  | 'HUN'
  | 'IDN'
  | 'IMN'
  | 'IND'
  | 'IOT'
  | 'IRL'
  | 'IRN'
  | 'IRQ'
  | 'ISL'
  | 'ISR'
  | 'ITA'
  | 'JAM'
  | 'JEY'
  | 'JOR'
  | 'JPN'
  | 'KAZ'
  | 'KEN'
  | 'KGZ'
  | 'KHM'
  | 'KIR'
  | 'KNA'
  | 'KOR'
  | 'KWT'
  | 'LAO'
  | 'LBN'
  | 'LBR'
  | 'LBY'
  | 'LCA'
  | 'LIE'
  | 'LKA'
  | 'LSO'
  | 'LTU'
  | 'LUX'
  | 'LVA'
  | 'MAC'
  | 'MAF'
  | 'MAR'
  | 'MCO'
  | 'MDA'
  | 'MDG'
  | 'MDV'
  | 'MEX'
  | 'MHL'
  | 'MKD'
  | 'MLI'
  | 'MLT'
  | 'MMR'
  | 'MNE'
  | 'MNG'
  | 'MNP'
  | 'MOZ'
  | 'MRT'
  | 'MSR'
  | 'MTQ'
  | 'MUS'
  | 'MWI'
  | 'MYS'
  | 'MYT'
  | 'NAM'
  | 'NCL'
  | 'NER'
  | 'NFK'
  | 'NGA'
  | 'NIC'
  | 'NIU'
  | 'NLD'
  | 'NOR'
  | 'NPL'
  | 'NRU'
  | 'NZL'
  | 'OMN'
  | 'PAK'
  | 'PAN'
  | 'PCN'
  | 'PER'
  | 'PHL'
  | 'PLW'
  | 'PNG'
  | 'POL'
  | 'PRI'
  | 'PRK'
  | 'PRT'
  | 'PRY'
  | 'PSE'
  | 'PYF'
  | 'QAT'
  | 'REU'
  | 'ROU'
  | 'RUS'
  | 'RWA'
  | 'SAU'
  | 'SDN'
  | 'SEN'
  | 'SGP'
  | 'SGS'
  | 'SHN'
  | 'SJM'
  | 'SLB'
  | 'SLE'
  | 'SLV'
  | 'SMR'
  | 'SOM'
  | 'SPM'
  | 'SRB'
  | 'SSD'
  | 'STP'
  | 'SUR'
  | 'SVK'
  | 'SVN'
  | 'SWE'
  | 'SWZ'
  | 'SXM'
  | 'SYC'
  | 'SYR'
  | 'TCA'
  | 'TCD'
  | 'TGO'
  | 'THA'
  | 'TJK'
  | 'TKL'
  | 'TKM'
  | 'TLS'
  | 'TON'
  | 'TTO'
  | 'TUN'
  | 'TUR'
  | 'TUV'
  | 'TWN'
  | 'TZA'
  | 'UGA'
  | 'UKR'
  | 'UMI'
  | 'URY'
  | 'USA'
  | 'UZB'
  | 'VAT'
  | 'VCT'
  | 'VEN'
  | 'VGB'
  | 'VIR'
  | 'VNM'
  | 'VUT'
  | 'WLF'
  | 'WSM'
  | 'XKX'
  | 'YEM'
  | 'ZAF'
  | 'ZMB'
  | 'ZWE';
