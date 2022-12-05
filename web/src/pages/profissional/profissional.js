

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
  Lookup,
  FormItem,
} from 'devextreme-react/data-grid';
import 'devextreme-react/list';
import ArrayStore from 'devextreme/data/array_store';

export default function Profissional() {


  const [servicos, setServicos] = React.useState([]);

  const generoList = [
    { nome: 'Masculino' },
    { nome: 'Feminino' },
    { nome: 'Outro' },
    { nome: 'Prefiro não dizer' },
  ]

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profissional</h2>

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
        onRowInserting={
          (e) => {
            e.data.servicos = servicos
          }
        }
        onRowClick={
          (e) => {
            servicos = e.data.servicos
          }
        }
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
        >

        </Editing>

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

        <Column dataField={'genero'} caption="Gênero" >
          <Lookup dataSource={generoList} valueExpr="nome" displayExpr={'nome'} />
        </Column>

        <Column
          dataField={'email'}
          caption={'Email'}
          hidingPriority={5}
        />
        <Column
          dataField={'telefone'}
          caption={'Telefone'}
          hidingPriority={4}
        />
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
        <Column
          dataField={'servicos'}
          caption={'Serviços'}
          hidingPriority={1}
          visible={false}
        >
          <FormItem editorType="dxList" editorOptions={{
            dataSource: new ArrayStore({
              data: [
                { id: 1, nome: 'Corte' },
                { id: 2, nome: 'Barba' },
                { id: 3, nome: 'Corte + Barba' },
                { id: 4, nome: 'Corte + Barba + Bigode' },
              ]
            }),
            height: 100,
            selectionMode: 'multiple',
            keyExpr: 'id',
            displayExpr: 'nome',
            onOptionChanged: function (args) {
              if (args.name === 'selectedItems') {
                setServicos(args.value);
              }
            }

          }} />
        </Column>
      </DataGrid>
    </React.Fragment>
  )
}

const baseUrl = process.env.REACT_APP_API_URL;

const store = new CustomStore({
  key: 'id',
  load: async (loadOptions) => {
    return await axios.get(`${baseUrl}/profissional`).then((data) => {

      return data
    })
  },
  insert: async (values) => {
    console.log("🚀 ~ file: profissional.js:155 ~ insert: ~ values", values)

    return axios.post(`${baseUrl}/profissional`, values).then(data => data).catch(err => {
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
    return axios.patch(`${baseUrl}/profissional/${key}`, values)
  },
  remove: (key) => {
    return axios.delete(`${baseUrl}/profissional/${key}`)
  }
});

const dataSource = new DataSource(store)