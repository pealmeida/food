import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      'Bearer JQQVXWxxEhzg8GLRxoWdoCrmiccei6_yTSqeSHrY863JtNS8OKQL_LhxQx1zDIGxH_z-xqa1cogdWw-5n8srnEMR_A5xBAs5mnm1A4UMh1HTESX4c-aWi57Cs4PyXnYx',
  },
});
