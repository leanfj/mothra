import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import './agendamentos.scss';
import { data } from './data.js';

const currentDate = new Date();
const views = ['week', 'month'];

export default function Agendamentos() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Agendamentos</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <Scheduler
            timeZone="America/Sao_Paulo"
            dataSource={dataSource}
            views={views}
            defaultCurrentView="week"
            defaultCurrentDate={currentDate}
            height={600}
            startDayHour={8}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

const store = new CustomStore({
  key: 'id',
  load: async (loadOptions) => {
    // return await axios.get(`${baseUrl}/cliente`).then((data) => {

    //   return data
    // })
  },
  insert: async (values) => {
    console.log("🚀 ~ file: agendamentos.js:41 ~ insert: ~ values", values)
    // return axios.post(`${baseUrl}/cliente`, values).then(data => data).catch(err => {
    //   if (err) {
    //     const data = err.response.data.message;
    //     if (data.length > 1) {
    //       throw new Error(data.join(", ").toUpperCase())
    //     }
    //     throw new Error(data.join("").toUpperCase())
    //   }
    // });
  },
  update: (key, values) => {
    // return axios.patch(`${baseUrl}/cliente/${key}`, values)
  },
  remove: (key) => {
    // return axios.delete(`${baseUrl}/cliente/${key}`)
  }
});

const dataSource = new DataSource(store)