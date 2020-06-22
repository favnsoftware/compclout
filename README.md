# compclout
Clout Software's own react component library based on Tailwind CSS

### storybook documentation is hosted at https://cloutsoftware.github.io/compclout/index.html

## Development
!OBS!!!!
export const Button: FC<ButtonTypes> = ({ onClick, label = "Some label", outlined}) => {
    return (
        <button
            onClick={onClick}
            className={outlined ? OUTLINED_BUTTON + " " + styles.root : CONTAINED_BUTTON}
        >
            <span>{label}</span>
        </button>
    )
}; <- Den siste ";" der er veldig viktig, mangler den vil ikke storybook kompilere
