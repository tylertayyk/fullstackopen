const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
)

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part} />)}
            <p><b>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course
