import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    Filter,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    SimpleList,
    TextField,
    TextInput,
} from 'react-admin'

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>
}

export const PostList = props => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
    return (<List filters={<PostFilter />} {...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.title}
                secondaryText={record => `${record.views} views`}
                tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
            />
        ) : (
                <Datagrid >
                    <TextField source="id" />
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            )}
    </List>
    )
}


export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
)

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
)