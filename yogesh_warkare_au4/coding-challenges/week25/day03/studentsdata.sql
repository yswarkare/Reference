PGDMP                         x            studentdata    12.2    12.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24696    studentdata    DATABASE     �   CREATE DATABASE studentdata WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE studentdata;
                postgres    false            �            1259    24725    class    TABLE     <   CREATE TABLE public.class (
    class_name text NOT NULL
);
    DROP TABLE public.class;
       public         heap    postgres    false            �            1259    24717    parents    TABLE     ?   CREATE TABLE public.parents (
    parent_name text NOT NULL
);
    DROP TABLE public.parents;
       public         heap    postgres    false            �            1259    24706    student    TABLE     5  CREATE TABLE public.student (
    id integer NOT NULL,
    student_name text NOT NULL,
    student_age integer NOT NULL,
    parent_phone_number integer,
    student_roll_number integer DEFAULT 0 NOT NULL,
    student_dob date DEFAULT '2000-01-01'::date NOT NULL,
    parent_name text,
    class_name text
);
    DROP TABLE public.student;
       public         heap    postgres    false            �            1259    24704    student_id_seq    SEQUENCE     �   CREATE SEQUENCE public.student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.student_id_seq;
       public          postgres    false    203                       0    0    student_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.student_id_seq OWNED BY public.student.id;
          public          postgres    false    202            �
           2604    24709 
   student id    DEFAULT     h   ALTER TABLE ONLY public.student ALTER COLUMN id SET DEFAULT nextval('public.student_id_seq'::regclass);
 9   ALTER TABLE public.student ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203                      0    24725    class 
   TABLE DATA           +   COPY public.class (class_name) FROM stdin;
    public          postgres    false    205   @                 0    24717    parents 
   TABLE DATA           .   COPY public.parents (parent_name) FROM stdin;
    public          postgres    false    204   ]                 0    24706    student 
   TABLE DATA           �   COPY public.student (id, student_name, student_age, parent_phone_number, student_roll_number, student_dob, parent_name, class_name) FROM stdin;
    public          postgres    false    203   z                  0    0    student_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.student_id_seq', 1, true);
          public          postgres    false    202            �
           2606    24732    class class_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_pkey PRIMARY KEY (class_name);
 :   ALTER TABLE ONLY public.class DROP CONSTRAINT class_pkey;
       public            postgres    false    205            �
           2606    24724    parents parents_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.parents
    ADD CONSTRAINT parents_pkey PRIMARY KEY (parent_name);
 >   ALTER TABLE ONLY public.parents DROP CONSTRAINT parents_pkey;
       public            postgres    false    204            �
           2606    24716    student student_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.student DROP CONSTRAINT student_pkey;
       public            postgres    false    203            �
           2606    24738    student student_class_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_class_name_fkey FOREIGN KEY (class_name) REFERENCES public.class(class_name);
 I   ALTER TABLE ONLY public.student DROP CONSTRAINT student_class_name_fkey;
       public          postgres    false    203    2706    205            �
           2606    24733     student student_parent_name_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_parent_name_fkey FOREIGN KEY (parent_name) REFERENCES public.parents(parent_name);
 J   ALTER TABLE ONLY public.student DROP CONSTRAINT student_parent_name_fkey;
       public          postgres    false    204    2704    203                  x������ � �            x������ � �         4   x�3�.I-�LUp/�LK���4�44�ANN#]C ��"�=... y��     