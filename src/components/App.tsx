import "@/styles.css"
import { KpiTable } from "@/components/KpiTable"
import MarketingDataGenerator from "./MarketingDataGenerator"

export default function App() {
  return (
    <>
      <div className="App">
        <h2>KpiTable</h2>
        <KpiTable />
      </div>

      <div className="App">
        <MarketingDataGenerator />
      </div>
    </>
  )
}
