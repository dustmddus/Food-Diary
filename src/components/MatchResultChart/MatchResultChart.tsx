import * as S from "./MatchResultChart.style";
import PieChart from "../PieChart";

interface MatchResult {
  win: number;
  draw: number;
  lose: number;
}
interface Props {
  matchResult: MatchResult;
}

const MatchResultToChart = (matchResult: MatchResult) =>
  Object.entries(matchResult).map(([type, value]: [string, number]) => {
    switch (type) {
      case "win":
        return { id: "승리", label: `승리 ${value}회`, value };
      case "draw":
        return { id: "무승부", label: `무승부 ${value}회`, value };
      case "lose":
        return { id: "패배", label: `패배 ${value}회`, value };
      default:
        return { id: "", label: "", value: 0 };
    }
  });

const MatchResultChart = ({ matchResult }: Props) => (
  <S.Wrapper>
    <PieChart data={MatchResultToChart(matchResult)} />
  </S.Wrapper>
);

export default MatchResultChart;
