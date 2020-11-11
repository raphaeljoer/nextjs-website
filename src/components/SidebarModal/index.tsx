import { FiX } from 'react-icons/fi';
import Link from 'next/link';
import {
  Menu,
  Modal,
  MenuItensContainer,
  MenuItem,
  CloseButton,
} from './styles';

interface ISidebarModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function SidebarModal({
  isOpen,
  setIsOpen,
}: ISidebarModalProps) {
  return (
    <Modal>
      <Menu isOpen={isOpen}>
        <CloseButton onClick={setIsOpen}>
          <FiX size="3rem" color="#554d89" />
        </CloseButton>
        <MenuItensContainer>
          <Link href="https://google.com" passHref>
            <MenuItem>about</MenuItem>
          </Link>
          <Link href="https://google.com" passHref>
            <MenuItem>pricing</MenuItem>
          </Link>
          <Link href="https://google.com" passHref>
            <MenuItem>blog</MenuItem>
          </Link>
          <Link href="https://google.com" passHref>
            <MenuItem>contact</MenuItem>
          </Link>
        </MenuItensContainer>
      </Menu>
    </Modal>
  );
}
