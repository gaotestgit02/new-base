import Button from "@atlaskit/button";
import Heading from "@atlaskit/heading";
import { Box, Inline, Stack, xcss } from "@atlaskit/primitives";
import AddIcon from "@atlaskit/icon/glyph/add";
import React from "react";
import { useQuery } from "@apollo/client";
import notesQuery from "./notes.graphql";
import { SimpleTag as Tag } from "@atlaskit/tag";
import { Note } from "types";

const wrapperStyles = xcss({
  paddingBlock: "space.200",
  paddingInline: "space.300",
  minHeight: "calc(100vh - 62px)",
  width: "75%",
  display: "flex",
  flexDirection: "column",
  gap: "space.200",
});

const notesWrapperStyles = xcss({
  gap: "space.050",
});

const noteWrapperStyles = xcss({
  borderTopRightRadius: "border.radius.400",
  paddingBlock: "space.075",
  paddingInline: "space.150",
  borderColor: "color.border",
  borderWidth: "border.width",
  borderStyle: "solid",
});

const noteTitleStyles = xcss({
  fontSize: "1.05em",
});

const tagWrapperStyles = xcss({
  // width: "120px",
});

export const Notes = () => {
  const { data } = useQuery(notesQuery);
  console.log("data", data);

  return (
    <Box xcss={wrapperStyles}>
      <Inline spread="space-between">
        <Heading variant="medium">Notes</Heading>
        <Button iconAfter={<AddIcon label="add" size="small" />}>Add</Button>
      </Inline>
      <Stack xcss={notesWrapperStyles}>
        {data?.notes.map((note: Note) => (
          <Inline
            key={note.id}
            xcss={noteWrapperStyles}
            spread="space-between"
            alignBlock="center"
          >
            <Box xcss={noteTitleStyles}>{note.title}</Box>
            <Inline xcss={tagWrapperStyles}>
              {note.tags.map((tag) => (
                <Tag key={tag.id} text={tag.name} />
              ))}
            </Inline>
          </Inline>
        ))}
      </Stack>
    </Box>
  );
};
