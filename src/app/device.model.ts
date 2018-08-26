export interface Device {
  id?: string;
  name?: string;
  location?: string;
  status?: string;
  temperature?: number;
  humidity?: number;
  isMonitorized?: boolean;
  dateCreated?: number;
  creator?: string;
}
