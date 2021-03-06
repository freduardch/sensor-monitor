export interface Device {
  id?: string;
  name?: string;
  location?: string;
  status?: boolean;
  temperature?: number;
  humidity?: number;
  isMonitorized?: boolean;
  dateCreated?: number;
  creator?: string;
  temperatureLimit?: number;
  temperatureUnits?: number;
  humidityLimit?: number;
  humidityUnits?: number;
}
