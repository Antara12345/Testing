import {render,screen,fireEvent} from "@testing-library/react"
import Counter from "./Counter"

describe("Counter Test",function(){
    it("should render without any error",function(){
        render(<Counter>count</Counter>)

        let count=screen.getByTestId("counter-text")
        expect(count).toBeInTheDocument()
    })
    it("should have add and reduce buttons",function(){
        render(<Counter>count</Counter>)

        let btn1=screen.getByText("Add")
        let btn2=screen.getByText("Reduce")
        expect(btn1).toBeInTheDocument()
        expect(btn2).toBeInTheDocument()
    })
    it("should have an element with counter value as default ( 0 )",function(){
        render(<Counter></Counter>)

        let init=screen.getByTestId("counter-text")
        expect(init).toHaveTextContent(0)
    })
    it("onClick of ADD, value of Counter should increment by 5",function(){
        render(<Counter></Counter>)

        let init=screen.getByTestId("counter-text")
        let button=screen.getByTestId("add-button")

        fireEvent.click(button)
        expect(init).toHaveTextContent(5)
    })
    it("onClick of REDUCE, the value of Counter should decrement by 5",function(){
        render(<Counter></Counter>)
        let init=screen.getByTestId("counter-text")
        let button=screen.getByTestId("reduce-button")

        fireEvent.click(button)
        expect(init).toHaveTextContent(-5)
    })
})