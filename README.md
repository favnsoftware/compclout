# Compclout
Clout Software's own react component library based on Tailwind CSS

### Storybook documentation is hosted at https://cloutsoftware.github.io/compclout/index.html

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


## Adding components
For å lettere holde oversikt over hvilke komponenter som jobbes på kan github sin 'branch' funksjon brukes.
Da kan andre se hvilke komponenter som jobbes på så ikke flere jobber på samme komponent samtidig.

Navnet på branchen bør settes til komponentens navn for ovesiktlighet. Feks: 'Button' / 'Button-component'.

* Opprettelse av branch: </br>
https://guides.github.com/activities/hello-world/#branch


* Committs til en bestemt branch i Github Desktop: </br>
https://help.github.com/en/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#1-choosing-a-branch-and-making-changes


* Åpne pull request for review før merge: </br>
https://guides.github.com/activities/hello-world/#pr


* Merge branch med master: </br>
https://guides.github.com/activities/hello-world/#merge