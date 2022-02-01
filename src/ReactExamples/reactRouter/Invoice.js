import { useParams, useNavigate } from "react-router-dom";
import { getInvoiceByNumber } from "./data";

export default function Invoice() {
  const params = useParams();
  const invoice = getInvoiceByNumber(Number(params.invoiceId));
  const navigate = useNavigate();

  return (
    <main>
      <h2>Invoice {params.invoiceId}</h2>
      <dl>
        <div>
          <dt>Name</dt>
          <dd>{invoice.name}</dd>
        </div>
        <div>
          <dt>Number</dt>
          <dd>{invoice.number}</dd>
        </div>
        <div>
          <dt>Amount</dt>
          <dd>{invoice.amount}</dd>
        </div>
        <div>
          <dt>Due</dt>
          <dd>{invoice.due}</dd>
        </div>
      </dl>

      <button onClick={() => navigate("/invoices")}>
        Navigate Programmatically
      </button>
    </main>
  );
}
