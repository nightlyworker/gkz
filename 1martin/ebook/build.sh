#!/bin/bash
#pandoc "document.md" -o "document.pdf" --from markdown --template "../../eisvogel.tex" --listings --top-level-division="chapter"


# --template eisvogel
# for pdf
 docker run --rm --volume "$(pwd):/data" --user $(id -u):$(id -g) pandoc/extra -s crash-course/0.md crash-course/1-Introduction-to-Human-Design.md crash-course/2-The-Four-Types-in-Human-Design.md crash-course/3-The-Nine-Centers-in-Human-Design.md crash-course/4-The-36-Channels-and-64-Gates-in-Human-Design.md crash-course/5-Profiles-and-Lines-in-Human-Design.md crash-course/6-Human-Design-and-Relationships.md  crash-course/7-Practical-Applications-of-Human-Design.md crash-course/8-Conclusion-Living-Your-Design.md crash-course/9-Authority-in-Human-Design.md crash-course/cover.md  --from markdown -V book -V pagetitle="Human Design Crash Course" -o HDZ-draft.epub  --listings  --top-level-division="chapter"


#subtitle: |
#          | Love yourself. It is the only thing you are here for, to discover the love of self \\
#          | - Ra Uru Hu