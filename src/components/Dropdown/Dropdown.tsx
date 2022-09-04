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
  disabled?: boolean;
  borderRadius?: string;
  fontSize?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const Dropdown = ({
  valueList,
  placeholder,
  width = "700px",
  height = "40px",
  borderRadius = "20px",
  fontSize = "18px",
  disabled,
  onChange,
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
        onChange={onChange}
        disabled={disabled}
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
