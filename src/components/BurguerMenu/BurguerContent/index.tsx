import { List } from "./styles";

interface BurguerProps {
  open: boolean;
}

const Burguer = ({open}: BurguerProps) => {
  return (
    <List open={open}>
      <li>Home</li>
      <li>Product</li>
      <li>Faq</li>
      <li>Contact</li>
    </List>
  );
};

export default Burguer;
