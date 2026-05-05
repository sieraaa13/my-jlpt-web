import { ExamWrapper } from "./exam-wrapper";

const YEARS = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];
const PERIODS = ["07", "12"];

export async function generateStaticParams() {
  const params = [];
  for (const year of YEARS) {
    for (const period of PERIODS) {
      params.push({ year, period });
    }
  }
  return params;
}

export default function ExamPage({
  params,
}: {
  params: { year: string; period: string };
}) {
  return <ExamWrapper params={params} />;
}
