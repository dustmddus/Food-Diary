import * as S from "./DistanceModal.style";
import { PropsWithChildren } from "react";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

const DistanceModal = ({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) => {
  return (
    <S.ModalContainer>
      <S.DialogBox>{children}</S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
};

export default DistanceModal;
