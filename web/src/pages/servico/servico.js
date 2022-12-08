

import React from 'react';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

import axios from 'axios';

import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Editing,
  ColumnChooser,
  SearchPanel,
} from 'devextreme-react/data-grid';

export default function Servico() {

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Serviço</h2>

      <DataGrid
        className={'dx-card wide-card'}
        dataSource={dataSource}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
        allowColumnResizing={true}
        columnMinWidth={100}
      >
        <Paging defaultPageSize={10} />

        <Pager showPageSizeSelector={true} showInfo={true} />

        <Editing
          mode="form"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
          confirmDelete={true}
          useIcons={true}
        />

        <FilterRow visible={true} />

        <ColumnChooser enabled={true} mode={'select'} />

        <SearchPanel visible={true} />

        <Column
          dataField={'id'}
          visible={false}
          allowEditing={false}
          formItem={{ visible: false }}
        />

        <Column
          dataField={'nome'}
          caption={'Nome'}
          hidingPriority={6}
        />


        <Column
          dataField={'descricao'}
          caption={'Descrção'}
          hidingPriority={5}
        />
        <Column
          dataField={'valor'}
          caption={'Valor'}
          format={{ style: 'currency', currency: 'BRL', useGrouping: true, minimumSignificantDigits: 2 }}
          dataType={'number'}
          hidingPriority={4}
        />

      </DataGrid>
    </React.Fragment>
  )
}

const baseUrl = process.env.REACT_APP_API_URL;

const store = new CustomStore({
  key: 'id',
  load: async (loadOptions) => {
    return await axios.get(`${baseUrl}/servico`).then((data) => {

      return data
    })
  },
  insert: async (values) => {
    return axios.post(`${baseUrl}/servico`, values).then(data => data).catch(err => {
      if (err) {
        const data = err.response.data.message;
        if (data.length > 1) {
          throw new Error(data.join(", ").toUpperCase())
        }
        throw new Error(data.join("").toUpperCase())
      }
    });
  },
  update: (key, values) => {
    return axios.patch(`${baseUrl}/servico/${key}`, values)
  },
  remove: (key) => {
    return axios.delete(`${baseUrl}/servico/${key}`)
  }
});

const dataSource = new DataSource(store)