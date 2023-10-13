

export default function About({children}) {
    return (
        <div className="w-full max-w-[1244px] mx-auto font-rubik">
            {children}
        </div>
    )
}

About.Heading = function AboutHeading({text, sx, ...props}) {
    return (
        <h1 className={`text-[40px] font-semibold ${sx}`} {...props}>
            {text}
        </h1>
    )
}

About.Text = function AboutText({children}) {
    return (
        <p className="text-base">
            {children}
        </p>
    )
}

About.Title = function AboutTitle({text}) {
    return (
        <h3 className="text-2xl font-medium">
            {text}
        </h3>
    )
}