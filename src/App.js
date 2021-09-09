import { Button } from "./components/button";
import { Container, Block, Box } from "./styles/container";

function App() {
  return (
    <Container>
      <h2>Buttons Styles</h2>
      <h3>Default button</h3>
      <Block>
        <Box>
          <p>{`<Button text="default" />`}</p>
          <Button text="Default" />
        </Box>
        <Box>
          <p>{`&:hover, &:focus`}</p>
          <Button text="Default" />
        </Box>
      </Block>
      <h3>Button variants</h3>
      <Block>
        <Box>
          <p>{`<Button variant="outline" />`}</p>
          <Button text="Default" variant="outline" />
        </Box>
        <Box>
          <p>{`&:hover, &:focus`}</p>
          <Button text="Default" variant="outline" />
        </Box>
      </Block>
      <Block>
        <Box>
          <p>{`<Button variant="outline" color="secondary"/>`}</p>
          <Button text="Default" variant="outline" color="secondary" />
        </Box>
        <Box>
          <p>{`&:hover, &:focus`}</p>
          <Button text="Default" variant="outline" color="secondary" />
        </Box>
      </Block>
      <Block>
        <Box>
          <p>{`<Button variant="text" />`}</p>
          <Button text="Default" variant="text" />
        </Box>
        <Box>
          <p>{`&:hover, &:focus`}</p>
          <Button text="Default" variant="text" />
        </Box>
      </Block>
      <h3>Button shadow</h3>
      <Block>
        <Box>
          <p>{`<Button disableShadow />`}</p>
          <Button text="Default" disableShadow />
        </Box>
      </Block>
      <h3>Disabled button</h3>
      <Block>
        <Box>
          <p>{`<Button disabled />`}</p>
          <Button text="Default" disabled />
        </Box>
        <Box>
          <p>{`<Button variant="text" disabled />`}</p>
          <Button text="Default" disabled variant="text" />
        </Box>
      </Block>
      <h3>Button icon</h3>
      <Block>
        <Box>
          <p>{`<Button text="default" startIcon="MdLocalGroceryStore" />`}</p>
          <Button text="Default" startIcon="MdLocalGroceryStore" />
        </Box>
        <Box>
          <p>{`<Button text="default" endIcon="MdLocalGroceryStore" />`}</p>
          <Button text="Default" endIcon="MdLocalGroceryStore" />
        </Box>
      </Block>
      <Block>
        <Box>
          <p>{`<Button text="default" startIcon="MdLocalGroceryStore" color="primary"/>`}</p>
          <Button
            text="Default"
            startIcon="MdLocalGroceryStore"
            color="primary"
          />
        </Box>
        <Box>
          <p>{`<Button text="default" endIcon="MdLocalGroceryStore" color="secondary"/>`}</p>
          <Button
            text="Default"
            endIcon="MdLocalGroceryStore"
            color="secondary"
          />
        </Box>
      </Block>
      <h3>Button sizes</h3>
      <Block>
        <Box>
          <p>{`<Button size="sm" />`}</p>
          <Button text="Default" size="sm" />
        </Box>
        <Box>
          <p>{`<Button size="md" />`}</p>
          <Button text="Default" size="md" />
        </Box>
        <Box>
          <p>{`<Button size="lg" />`}</p>
          <Button text="Default" size="lg" />
        </Box>
      </Block>
      <h3>Button colors</h3>
      <Block>
        <Box>
          <p>{`<Button color="default" />`}</p>
          <Button text="Default" color="default" />
        </Box>
        <Box>
          <p>{`<Button color="primary" />`}</p>
          <Button text="Default" color="primary" />
        </Box>
        <Box>
          <p>{`<Button color="secundary" />`}</p>
          <Button text="Default" color="secondary" />
        </Box>
        <Box>
          <p>{`<Button color="danger" />`}</p>
          <Button text="Default" color="danger" />
        </Box>
      </Block>
      <Block>
        <Box>
          <p>{`&:hover, &:focus`}</p>
          <Button text="Default" color="default" />
        </Box>
        <Box>
          <p>{`&:hover, &:focus`}</p>
          <Button text="Default" color="primary" />
        </Box>
        <Box>
          <p>{`&:hover, &:focus`}</p>
          <Button text="Default" color="secondary" />
        </Box>
        <Box>
          <p>{`&:hover, &:focus`}</p>
          <Button text="Default" color="danger" />
        </Box>
      </Block>
      <Block>
        <span>Icons: https://react-icons.github.io/react-icons</span>
      </Block>
      <Block>
        <footer>
          created by <strong>gbdeveloper</strong> - devChallenges.io
        </footer>
      </Block>
    </Container>
  );
}

export default App;
