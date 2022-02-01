import { Outlet, useSearchParams } from "react-router-dom";
import NavLinkWithQuery from "./NavLinkWithQuery";
import { getInvoices } from "./data";

export default function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterTerm = searchParams.get("filter");
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <nav
          style={{
            padding: "1rem",
          }}
        >
          <input
            type="text"
            value={filterTerm || ""}
            onChange={(e) => {
              const filter = e.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter((invoice) => {
              if (!filterTerm || !filterTerm.length) {
                return true;
              }

              return invoice.name.toLowerCase().indexOf(filterTerm) !== -1;
            })
            .map((invoice) => (
              <NavLinkWithQuery
                key={invoice.number}
                to={`/invoices/${invoice.number}`}
                style={({ isActive }) => ({
                  display: "inline-block",
                  margin: "0 0 0 1rem",
                  color: isActive ? "red" : "blue",
                })}
              >
                {invoice.name}
              </NavLinkWithQuery>
            ))}
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
