

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
  SearchPanel
} from 'devextreme-react/data-grid';

export default function Clientes() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Clientes</h2>

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
          width={90}
          visible={false}
          allowEditing={false}
        />
        <Column
          dataField={'nome'}
          width={190}
          caption={'Nome'}
          hidingPriority={6}
        />
        <Column
          dataField={'email'}
          caption={'Email'}
          hidingPriority={5}
        />
        <Column
          dataField={'telefone'}
          caption={'Telefone'}
          hidingPriority={4}
        >
        </Column>
        <Column
          dataField={'endereco'}
          caption={'Endereço'}
          hidingPriority={3}
        />
        <Column
          dataField={'cidade'}
          caption={'Cidade'}
          hidingPriority={2}
        />
        <Column
          dataField={'estado'}
          caption={'Estado'}
          hidingPriority={1}
        />

      </DataGrid>
    </React.Fragment>
  )
}

const baseUrl = process.env.REACT_APP_API_URL;

const store = new CustomStore({
  key: 'id',
  load: async (loadOptions) => {
    return await axios.get(`${baseUrl}/clientes`)
  },
  insert: async (values) => {
    return axios.post(`${baseUrl}/clientes`, values).then(data => data).catch(err => {
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
    console.log("🚀 ~ file: clientes.js:114 ~ key", key)
    console.log("🚀 ~ file: clientes.js:121 ~ values", values)

    return axios.patch(`${baseUrl}/clientes/${key}`, values)
  },
  remove: (key) => {
    return axios.delete(`${baseUrl}/clientes/${key}`)
  }
});

const dataSource = new DataSource(store)