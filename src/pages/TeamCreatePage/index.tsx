import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTeam } from "src/apis/api/team";
import Button from "src/components/Button";
import Dropdown from "src/components/Dropdown";
import {
  SPORTS_CATEGORY_DROPDOWN,
  SPORTS_CATEGORY_TEXT,
} from "src/constants/category";
import * as S from "./TeamCreatePage.style";
import { Team } from "./type";
import { validation } from "./validation";

const TeamCreatePage = () => {
  const [errors, setErrors] = useState<Partial<Team>>({});
  const [fisrtSubmit, setFirstSubmit] = useState(true);
  const [state, setState] = useState<Team>({
    name: "",
    description: "",
    sportsCategory: "",
  });

  const navigate = useNavigate();

  const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const category = Object.keys(SPORTS_CATEGORY_TEXT).find(
      (key) => SPORTS_CATEGORY_TEXT[key] === value
    );
    setState({ ...state, sportsCategory: category || "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFirstSubmit(false);
    const error = validation(state);
    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }
    const submit = async () => {
      try {
        const res = await createTeam(state);
        if (res.status === 200) {
          alert("팀 생성 완료!");
          // 팀 프로필로 이동
          navigate("/");
        }
      } catch (e) {
        console.log(e);
      }
    };
    submit();
  };

  useEffect(() => {
    if (!fisrtSubmit) {
      setErrors(validation(state));
    }
  }, [state]);

  return (
    <S.Container>
      <S.Title>팀 생성</S.Title>
      <S.Input
        name="name"
        value={state?.name}
        onChange={handleChange}
        placeholder="팀 이름"
      />
      {errors.name && <S.ErrorText>{errors.name}</S.ErrorText>}
      <S.ItemWrapper>
        <Dropdown
          width="600px"
          placeholder="종목 선택"
          onChange={handleSelectCategory}
          valueList={SPORTS_CATEGORY_DROPDOWN}
        />
        {errors.sportsCategory && (
          <S.ErrorText>{errors.sportsCategory}</S.ErrorText>
        )}
      </S.ItemWrapper>

      <S.TextArea
        name="description"
        onChange={handleChange}
        placeholder="팀을 소개해주세요!"
      />
      {errors.description && <S.ErrorText>{errors.description}</S.ErrorText>}
      <Button width="600px" buttonType="SUBMIT" onClick={handleSubmit}>
        팀 생성
      </Button>
    </S.Container>
  );
};

export default TeamCreatePage;
