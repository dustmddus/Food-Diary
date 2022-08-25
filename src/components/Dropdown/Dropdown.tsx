import * as S from "./Dropdown.style";

interface Value {
  id: number;
  text: string;
}

interface Props {
  valueList: Array<Value>;
  placeholder: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  fontSize?: string;
}

const Dropdown = ({
  valueList,
  placeholder,
  width = "800px",
  height = "60px",
  borderRadius = "20px",
  fontSize = "20px",
}: Props) => {
  return (
    <S.Container>
      <S.Select
        required
        defaultValue={"Default"}
        width={width}
        height={height}
        fontSize={fontSize}
        borderRadius={borderRadius}
      >
        <S.Option value="Default" disabled>
          {placeholder}
        </S.Option>
        {valueList.map((i) => (
          <S.Option key={i.id} value={i.text}>
            {i.text}
          </S.Option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default Dropdown;
