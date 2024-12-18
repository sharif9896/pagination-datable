import { useState, useEffect, ChangeEvent, useRef } from "react";
import { DataTable, DataTableSelectionMultipleChangeEvent, DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import { FaAngleDown } from "react-icons/fa6";
import { OverlayPanel } from 'primereact/overlaypanel';


const Pagination = () => {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [selectpagination, setselectpaginatio] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const op = useRef(null);
    const seter = useRef(null);

  const totalPages = 5;

  const handlePageClick = (page : ChangeEvent<HTMLButtonElement>) => {
    setCurrentPage(page as any);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const setcurent = (e: ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault();
        // console.log(e.target.value);
        let newval = e.target.value;
        console.log(newval);
        console.log(selectedProducts)
        // setSelectedProducts(newval as any);
    }
  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setCustomers(data.data));
  }, [currentPage]);

  const chanpagination = (e : ChangeEvent<HTMLSelectElement>) => {
    let newpage = e.target.value;
    setselectpaginatio(newpage as any);
  };

// const select = (newval : ChangeEvent<HTMLButtonElement>) => {
//     setSelectedProducts(newval as any);
//   }

//   const customerss = [
//     {
//       id: "1",
//       name: "Babu",
//       Age: "19",
//       Profession: "Engineer",
//     },
//     {
//       id: "2",
//       name: "Rayan",
//       Age: "19",
//       Profession: "Software Engineer",
//     },
//     {
//       id: "3",
//       name: "Sharif",
//       Age: "19",
//       Profession: "AI & ML Engineer",
//     },
//     {
//       id: "4",
//       name: "Sharif",
//       Age: "19",
//       Profession: "AI & ML Engineer",
//     },
//     {
//       id: "5",
//       name: "Sharif",
//       Age: "19",
//       Profession: "AI & ML Engineer",
//     },
//   ];

  // customers.map(val => console.log(val.title));
  return (
      <div className="card">

      <div className="flex justify-content-center align-items-center mb-10 gap-2">
        <InputSwitch
          inputId="input-rowclick"
          checked={rowClick}
          onChange={(e) => setRowClick(e.value)}
        />
        <label htmlFor="input-rowclick">Row Click</label>
          </div>


      <DataTable
        className="table"
        value={customers}
        paginator
        rows={selectpagination}
        selectionMode={rowClick ? null : "checkbox"}
        selection={selectedProducts}
        onSelectionChange={(e: DataTableSelectionMultipleChangeEvent<DataTableValueArray>) => { setSelectedProducts(e.value as any);}}
        dataKey="id"
        tableStyle={{ minWidth: "50rem" }}
          >
        <Column
          className="column"
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
              ></Column>


              {/*  */}

                   {/* <FaAngleDown style={{ position: "absolute", top: "20%", left: "1.8%", zIndex: "1", cursor: "pointer" }} onClick={(e) => op.current.toggle(e)} /> */}


              <Column
                  header={<>
                      <FaAngleDown onClick={(e) => op.current.toggle(e)} style={{cursor:"pointer"}}/>
                      <OverlayPanel ref={op}>

                      <div className="fiels1" style={{marginTop:"20%", cursor: "pointer", padding: "30px", border: "1px solid lightgrey", background: "white", borderRadius: "8px" }}>
                        {/* <form> */}
                          <input type="number" className="field1" style={{ padding: "10px" }} placeholder="Enter Rows" onChange={setcurent} /><br />

                           <button className="subtn" style={{ marginLeft: "60%", marginTop: "10px", padding: "10px", cursor: "pointer" }} >Submit</button>
                            {/* </form> */}
              </div>
                {/* <img src={'https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img> */}
            </OverlayPanel>
                  </>
                  }
              >


          {/* <Button type="button" icon="pi pi-image" label="Image"   /> */}



              </Column>
        <Column
          className="column"
          field="title"
          header="Title"
          style={{ width: "25%" }}
              ></Column>

        <Column
          field="place_of_origin"
          header="Place_of_Origin"
          style={{ width: "25%" }}
        ></Column>
        <Column
          className="column"
          field="artist_display"
          header="artist_display"
          style={{ width: "25%" }}
        ></Column>
        <Column
          className="column"
          field="inscriptions"
          header="Inscriptions"
          style={{ width: "25%" }}
        ></Column>
        <Column
          className="column"
          field="date_start"
          header="date_start"
          style={{ width: "25%" }}
        ></Column>
        <Column
          className="column"
          field="date_end"
          header="date_end"
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
      <div className="server">
        <center>
          <h4>Table-of-Each Server-12-data Pagination</h4>
        </center>
      </div>
      <div className="pagination-container">
        <button
          className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`page-number ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageClick(index + 1 as any)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`arrow ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
        <div className="selectpaginatio">
          <select name="1" id="1" onChange={(e) => chanpagination(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>

      <div className="server">
        <center>
          <h4>Server Side Pagination</h4>
        </center>
          </div>
    </div>
  );
};

export default Pagination;
